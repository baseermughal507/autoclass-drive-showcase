import { useNavigate } from 'react-router-dom';
import { useAdmin } from '@/hooks/useAdmin';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CarForm, { CarFormData } from '@/components/admin/CarForm';
import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export default function AddCar() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { isAdmin, loading: adminLoading } = useAdmin();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    } else if (!adminLoading && !isAdmin) {
      navigate('/');
    }
  }, [user, isAdmin, authLoading, adminLoading, navigate]);

  const createMutation = useMutation({
    mutationFn: async (data: CarFormData) => {
      const { error } = await supabase.from('cars').insert([{
        ...data,
        created_by: user?.id,
      }]);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success('Car added successfully');
      navigate('/admin/cars');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to add car');
    },
  });

  if (authLoading || adminLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Add New Car</h1>
        <CarForm
          onSubmit={(data) => createMutation.mutateAsync(data)}
          isLoading={createMutation.isPending}
        />
      </main>
      <Footer />
    </div>
  );
}

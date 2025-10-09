import { useNavigate, useParams } from 'react-router-dom';
import { useAdmin } from '@/hooks/useAdmin';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CarForm, { CarFormData } from '@/components/admin/CarForm';
import { useMutation, useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Car } from '@/types/database';

export default function EditCar() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user, loading: authLoading } = useAuth();
  const { isAdmin, loading: adminLoading } = useAdmin();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    } else if (!adminLoading && !isAdmin) {
      navigate('/');
    }
  }, [user, isAdmin, authLoading, adminLoading, navigate]);

  const { data: car, isLoading } = useQuery({
    queryKey: ['car', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('cars')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data as Car;
    },
    enabled: isAdmin && !!id,
  });

  const updateMutation = useMutation({
    mutationFn: async (data: CarFormData) => {
      const { error } = await supabase
        .from('cars')
        .update(data)
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success('Car updated successfully');
      navigate('/admin/cars');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to update car');
    },
  });

  if (authLoading || adminLoading || isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!car) {
    return <div className="min-h-screen flex items-center justify-center">Car not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Edit Car</h1>
        <CarForm
          defaultValues={car}
          onSubmit={(data) => updateMutation.mutateAsync(data)}
          isLoading={updateMutation.isPending}
        />
      </main>
      <Footer />
    </div>
  );
}

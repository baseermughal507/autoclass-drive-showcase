import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Car } from '@/types/database';

interface CarFormProps {
  defaultValues?: Partial<Car>;
  onSubmit: (data: CarFormData) => Promise<void>;
  isLoading?: boolean;
}

export interface CarFormData {
  title: string;
  main_image: string;
  price: number;
  description: string;
  short_description: string;
  is_sold: boolean;
  year: number;
  mileage: string;
  fuel_type: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric' | 'CNG' | 'LPG';
  transmission: 'Automatic' | 'Manual';
  city: string;
  province: string;
  color: string;
  assembly: 'Local' | 'Imported';
  engine_capacity: string;
  body_type: 'Sedan' | 'Hatchback' | 'SUV' | 'Crossover' | 'Coupe' | 'Convertible' | 'Wagon' | 'Van' | 'Pickup';
}

export default function CarForm({ defaultValues, onSubmit, isLoading }: CarFormProps) {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<CarFormData>({
    defaultValues: {
      title: defaultValues?.title || '',
      main_image: defaultValues?.main_image || '',
      price: defaultValues?.price || 0,
      description: defaultValues?.description || '',
      short_description: defaultValues?.short_description || '',
      is_sold: defaultValues?.is_sold || false,
      year: defaultValues?.year || new Date().getFullYear(),
      mileage: defaultValues?.mileage || '',
      fuel_type: defaultValues?.fuel_type || 'Petrol',
      transmission: defaultValues?.transmission || 'Automatic',
      city: defaultValues?.city || '',
      province: defaultValues?.province || '',
      color: defaultValues?.color || '',
      assembly: defaultValues?.assembly || 'Local',
      engine_capacity: defaultValues?.engine_capacity || '',
      body_type: defaultValues?.body_type || 'Sedan',
    },
  });

  const isSold = watch('is_sold');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Car Title *</Label>
            <Input
              id="title"
              {...register('title', { required: 'Title is required' })}
              placeholder="e.g., Toyota Corolla 2012"
            />
            {errors.title && <p className="text-sm text-destructive">{errors.title.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="main_image">Main Image URL *</Label>
            <Input
              id="main_image"
              {...register('main_image', { required: 'Image URL is required' })}
              placeholder="https://example.com/image.jpg"
            />
            {errors.main_image && <p className="text-sm text-destructive">{errors.main_image.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price (Rs.) *</Label>
              <Input
                id="price"
                type="number"
                {...register('price', { required: 'Price is required', min: 0 })}
                placeholder="5000000"
              />
              {errors.price && <p className="text-sm text-destructive">{errors.price.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="year">Year *</Label>
              <Input
                id="year"
                type="number"
                {...register('year', { required: 'Year is required', min: 1900, max: new Date().getFullYear() + 1 })}
                placeholder="2012"
              />
              {errors.year && <p className="text-sm text-destructive">{errors.year.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="short_description">Short Description</Label>
            <Input
              id="short_description"
              {...register('short_description')}
              placeholder="Brief description"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Full Description</Label>
            <Textarea
              id="description"
              {...register('description')}
              placeholder="Detailed description of the car..."
              rows={5}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="is_sold"
              checked={isSold}
              onCheckedChange={(checked) => setValue('is_sold', checked)}
            />
            <Label htmlFor="is_sold">Mark as Sold</Label>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Car Specifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fuel_type">Fuel Type *</Label>
              <Select
                value={watch('fuel_type')}
                onValueChange={(value) => setValue('fuel_type', value as CarFormData['fuel_type'])}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select fuel type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Petrol">Petrol</SelectItem>
                  <SelectItem value="Diesel">Diesel</SelectItem>
                  <SelectItem value="Hybrid">Hybrid</SelectItem>
                  <SelectItem value="Electric">Electric</SelectItem>
                  <SelectItem value="CNG">CNG</SelectItem>
                  <SelectItem value="LPG">LPG</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="transmission">Transmission *</Label>
              <Select
                value={watch('transmission')}
                onValueChange={(value) => setValue('transmission', value as CarFormData['transmission'])}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select transmission" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Automatic">Automatic</SelectItem>
                  <SelectItem value="Manual">Manual</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="mileage">Mileage</Label>
              <Input
                id="mileage"
                {...register('mileage')}
                placeholder="50,000 km"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="engine_capacity">Engine Capacity</Label>
              <Input
                id="engine_capacity"
                {...register('engine_capacity')}
                placeholder="1800 cc"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="body_type">Body Type</Label>
              <Select
                value={watch('body_type')}
                onValueChange={(value) => setValue('body_type', value as CarFormData['body_type'])}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select body type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Sedan">Sedan</SelectItem>
                  <SelectItem value="Hatchback">Hatchback</SelectItem>
                  <SelectItem value="SUV">SUV</SelectItem>
                  <SelectItem value="Crossover">Crossover</SelectItem>
                  <SelectItem value="Coupe">Coupe</SelectItem>
                  <SelectItem value="Convertible">Convertible</SelectItem>
                  <SelectItem value="Wagon">Wagon</SelectItem>
                  <SelectItem value="Van">Van</SelectItem>
                  <SelectItem value="Pickup">Pickup</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="assembly">Assembly</Label>
              <Select
                value={watch('assembly')}
                onValueChange={(value) => setValue('assembly', value as CarFormData['assembly'])}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select assembly" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Local">Local</SelectItem>
                  <SelectItem value="Imported">Imported</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="color">Color</Label>
            <Input
              id="color"
              {...register('color')}
              placeholder="White"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Location</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                {...register('city')}
                placeholder="Karachi"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="province">Province</Label>
              <Input
                id="province"
                {...register('province')}
                placeholder="Sindh"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-4">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Saving...' : 'Save Car'}
        </Button>
        <Button type="button" variant="outline" onClick={() => window.history.back()}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

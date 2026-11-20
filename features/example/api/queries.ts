import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '@/lib/api/client';

export interface ExampleItem {
  id: string;
  title: string;
  description: string;
}

export const useExampleItems = () => {
  return useQuery({
    queryKey: ['example-items'],
    queryFn: async () => {
      const { data } = await apiClient.get<ExampleItem[]>('/example');
      return data;
    },
  });
};

export const useCreateExampleItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (item: Omit<ExampleItem, 'id'>) => {
      const { data } = await apiClient.post<ExampleItem>('/example', item);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['example-items'] });
    },
  });
};

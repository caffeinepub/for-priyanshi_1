import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useGetResponse() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["response"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getResponse();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitResponse() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (message: string) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitResponse(message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["response"] });
    },
  });
}

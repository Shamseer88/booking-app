import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateCabin } from "../services/apiCabins";

import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import toast from "react-hot-toast";

export default function CreateCabinForm() {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: CreateCabin,
    onSuccess: () => {
      toast.success("New cabin created successfully!");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });
  console.log("errors", errors);
  const onSubmit = (data) => {
    mutate(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Cabin Name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register("name", { required: "This field is required" })}
        ></Input>
      </FormRow>
      <FormRow label="Maximum Capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isCreating}
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              messsage: "Capacity should be atleast 1",
            },
          })}
        ></Input>
      </FormRow>
      <FormRow label="Regular Price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isCreating}
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              messsage: "Price should be atleast 1",
            },
          })}
        ></Input>
      </FormRow>
      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isCreating}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
        ></Input>
      </FormRow>
      <FormRow label="Description" error={errors?.description?.message}>
        <Input
          type="text-area"
          id="description"
          disabled={isCreating}
          {...register("description", { required: "This field is required" })}
        ></Input>
      </FormRow>
      <FormRow label="Cabin Photo">
        <Input type="text" id="image" accept="image/*"></Input>
      </FormRow>
      <FormRow>
        <Button variation="secondary">Cancel</Button>
        <Button>Add</Button>
      </FormRow>
    </form>
  );
}

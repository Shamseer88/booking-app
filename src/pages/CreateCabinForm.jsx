import Button from "../ui/Button";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";

export default function CreateCabinForm() {
  return (
    <form>
      <FormRow label="Cabin Name">
        <Input type="text" id="name"></Input>
      </FormRow>
      <FormRow label="Maximum Capacity">
        <Input type="number" id="maxCapacity"></Input>
      </FormRow>
      <FormRow label="Regular Price">
        <Input type="number" id="regularPrice"></Input>
      </FormRow>
      <FormRow label="Discount">
        <Input type="number" id="discount"></Input>
      </FormRow>
      <FormRow label="Description">
        <Input type="text-area" id="description"></Input>
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

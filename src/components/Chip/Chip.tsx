import { Button } from "../../shared/ui/Button/Button";

interface ChipProps {
  text: string;
}
export const Chip = ({ text }: ChipProps) => {
  return <Button variant="chips">{text}</Button>;
};

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface GridProps {
  size: number;
}

const Grid: React.FC<GridProps> = ({ size }) => {
  return (
    <InputOTP maxLength={size}>
      <InputOTPGroup className="">
        {Array.from({ length: size }, (_, index) => (
          <InputOTPSlot
            key={index}
            index={index}
            className="text-xl font-bold"
          />
        ))}
      </InputOTPGroup>
    </InputOTP>
  );
};
export default Grid;

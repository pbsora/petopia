import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "../ui/use-toast";

const HomeNewsSignup = () => {
  const { toast } = useToast();
  const handleClick = () => {
    toast({
      title: "You have successfully signed up for our newsletter",
    });
  };

  return (
    <div className="w-full bg-slate-50 dark:bg-slate-800">
      <div className="container flex md:w-[70%]  gap-6 py-12 items-center flex-col lg:flex-row">
        <p className="text-base font-semibold lg:text-sm text-zinc-700 dark:text-zinc-200">
          Sign-up and receive our promotions and news before everyone else
        </p>
        <Input
          placeholder="Email"
          className="w-full lg:max-w-72 border-zinc-400 dark:border-zinc-200"
        />
        <Select>
          <SelectTrigger className="w-full lg:w-[180px] border-zinc-400 dark:border-zinc-200">
            <SelectValue placeholder="Pet" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dog">Dog</SelectItem>
            <SelectItem value="cat">Cat</SelectItem>
            <SelectItem value="bird">Bird</SelectItem>
            <SelectItem value="fish">Fish</SelectItem>
          </SelectContent>
        </Select>

        <button
          onClick={handleClick}
          type="button"
          className="w-full px-6 py-2 duration-200 bg-transparent border-2 border-black rounded-lg dark:border-zinc-200 lg:w-28 hover:bg-slate-100 dark:hover:bg-slate-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};
export default HomeNewsSignup;

import { AlarmClock, Truck, Home, CreditCard } from "lucide-react";

const HomeBenefitsDesktop = () => {
  return (
    <section className=" hidden lg:grid grid-cols-4 w-[90vw] xl:w-[80vw] m-auto py-10 gap-6 justify-between dark:text-zinc-100 text-zinc-800 select-none">
      <div className="flex items-center gap-4 py-5 pl-6 pr-16 bg-slate-100 dark:bg-slate-800 rounded-xl">
        <AlarmClock size={30} />
        <span className="text-base font-madimi ">Delivery in hours</span>
      </div>
      <div className="flex items-center gap-4 py-5 pl-6 pr-8 bg-slate-100 rounded-xl dark:bg-slate-800">
        <Truck size={30} />
        <span className="text-base font-madimi ">Free shipping worldwide</span>
      </div>
      <div className="flex items-center gap-4 py-5 pl-6 pr-16 bg-slate-100 rounded-xl dark:bg-slate-800">
        <CreditCard size={30} />
        <span className="text-base font-madimi ">Exclusive discounts</span>
      </div>
      <div className="flex items-center gap-4 py-5 pl-6 pr-8 bg-slate-100 rounded-xl dark:bg-slate-800">
        <Home size={30} />
        <span className="text-base font-madimi ">24/7 customer service</span>
      </div>
    </section>
  );
};
export default HomeBenefitsDesktop;

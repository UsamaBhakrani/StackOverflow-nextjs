const RightSideBar = () => {
  return (
    <section className="background-light900_dark200 light-border sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[350px] custom-scrollbar">
      <div className="">
        <h3 className="h3-bold text-dark-200_light900">Recent Invoices</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]"></div>
      </div>
      <div className="mt-16">test 2</div>
    </section>
  );
};

export default RightSideBar;

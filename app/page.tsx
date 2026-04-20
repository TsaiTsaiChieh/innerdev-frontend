const Page = () => {
  return (
    <main className="flex-1">
      <section className="mx-auto w-[min(760px,calc(100%-24px))] py-16 sm:w-[min(760px,calc(100%-16px))] sm:py-12">
        <div className="text-center">
          <h1 className="text-[clamp(2.2rem,6vw,3.45rem)] leading-none font-semibold tracking-[-0.045em] text-[#2f3a32]">
            InnerDev
          </h1>
          <p className="mx-auto mt-3 max-w-[28rem] text-[0.98rem] leading-7 font-medium text-[#4CAF50]">
            Turn knowledge into your own language
          </p>
        </div>

        <div className="mt-8 rounded-[24px] border border-white bg-white p-8 shadow-[0_16px_36px_rgba(76,175,80,0.10)] md:px-10 md:py-9">
          <p className="max-w-[34rem] text-[1.02rem] leading-[1.95] text-[#4b5b4d]">
            Paste what you learned today, e.g, debounce is a technique to
            delay...
          </p>
        </div>
      </section>
    </main>
  );
};

export default Page;

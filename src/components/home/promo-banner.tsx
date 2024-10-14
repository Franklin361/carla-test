function PromoBanner() {
  return (
    <section>
      <div className="grid grid-cols-[1fr,auto] gap-5 rounded-2xl bg-black p-5 text-white/70">
        <div className="space-y-1">
          <h2 className="text-lg font-medium leading-tight text-white">
            Start sending money tax free
          </h2>
          <p className="text-pretty text-sm leading-relaxed">
            The best place for freelancers to receive and send money. Start saving now!
          </p>
        </div>
        <div className="relative h-full w-20">
          <img
            alt="coin"
            className="absolute right-0 h-full scale-125 object-contain"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qexcr8pq3nbvb2gbrywg.png"
          />
        </div>
      </div>
    </section>
  );
}

export default PromoBanner;

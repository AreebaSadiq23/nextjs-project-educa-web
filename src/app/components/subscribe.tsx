interface SubscribeSectionProps {
  name: string;
  email: string;
  buttonText: string;
}

const SubscribeSection: React.FC<SubscribeSectionProps> = ({
  name,
  email,
  buttonText,
}) => {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center max-w-3xl mx-auto py-5 px-4 sm:px-7 rounded-lg shadow-md gap-4 sm:gap-6 bg-yellow-200">
      <input
        type="text"
        placeholder={name}
        className="w-full sm:flex-1 px-4 py-2 border rounded sm:rounded-l focus:outline-none"
      />
      <input
        type="email"
        placeholder={email}
        className="w-full sm:flex-1 px-4 py-2 border-t sm:border-t-0 sm:border-l border-b sm:border focus:outline-none"
      />
      <button className="w-full sm:w-auto bg-amber-600 text-white px-6 py-2 rounded sm:rounded-r hover:bg-amber-700 transition">
        {buttonText}
      </button>
    </section>
  );
};

export default SubscribeSection;

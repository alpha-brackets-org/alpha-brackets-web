export default function Map() {
  return (
    <section className="pb-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="rounded-[40px] overflow-hidden border border-border/50 shadow-2xl h-[500px] grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110416.347715017!2d71.41162383568112!3d30.19472304959146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b34208a54aff5%3A0xc47e3a89e9095690!2sMultan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714838400000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Alpha Brackets Location"
          />
        </div>
      </div>
    </section>
  );
}

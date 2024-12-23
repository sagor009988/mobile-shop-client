
const FaqSection = () => {
    return (
        <div className='text-center max-w-4xl mx-auto flex flex-col gap-5'>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">What types of mobile phones do you sell?</div>
                <div className="collapse-content">
                    <p>We sell a variety of mobile phones, including flagship models from brands like Apple, Samsung, OnePlus, Xiaomi, and more. We also have budget-friendly and mid-range options to suit every need.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">Do you offer any warranties?</div>
                <div className="collapse-content">
                    <p>Yes, all our phones come with a standard manufacturer warranty, typically lasting one year. Extended warranty options are also available for added protection.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">Do you provide trade-in options?</div>
                <div className="collapse-content">
                    <p>Yes, we offer trade-in services. Bring in your old phone, and we’ll evaluate its value, which you can use as credit toward purchasing a new phone.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">Can I purchase accessories for my phone?</div>
                <div className="collapse-content">
                    <p>Absolutely! We stock a wide range of accessories, including cases, screen protectors, chargers, earphones, and more, compatible with most major phone brands.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">Do you offer installment payment options?</div>
                <div className="collapse-content">
                    <p>Yes, we provide flexible installment plans through partner financial institutions. Contact us to know more about eligibility and terms.</p>
                </div>
            </div>
        </div>

    );
};

export default FaqSection;
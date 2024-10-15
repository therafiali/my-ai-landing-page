import {
  ArrowTrendingUpIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Lawyer from "@/assets/female-lawyer.webp";
import { DocumentChartBarIcon } from "@heroicons/react/24/solid";

const FeaturesSection = () => {
  const features = [
    {
      name: "Case Management.",
      description:
        "Efficiently track and manage your cases with real-time updates and notifications. Stay organized and never miss a deadline.",
      icon: ArrowTrendingUpIcon,
    },
    {
      name: "Document Automation.",
      description:
        "Generate legal documents quickly and accurately using AI-powered templates. Save time and reduce errors in your paperwork.",
      icon: DocumentChartBarIcon,
    },
    {
      name: "Client Communication.",
      description:
        "Facilitate seamless communication with clients through secure messaging and updates. Build trust and enhance client relationships.",
      icon: ChatBubbleBottomCenterIcon,
    },
  ];

  return (
    <section>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Streamline Your Practice
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Enhance Your Legal Workflow
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Transform the way you manage cases and communicate with
                  clients. Our AI-driven solutions help you work smarter, not
                  harder.
                </p>

                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature, index) => (
                    <div key={index} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          aria-hidden="true"
                          role="img"
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        />
                        {feature.name}
                      </dt>
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              src={Lawyer}
              alt="Lawyer"
              width={1000 } 
              height={1000  } 
              className="object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

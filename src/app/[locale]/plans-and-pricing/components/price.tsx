'use client';
import Image from "next/image";
import { useTranslations } from "next-intl";

import { ArrowRight } from "@/shared/icons/fill/arrow-right";
import { Button } from "@/shared/ui/kit/button";
import { Text } from "@/shared/ui/kit/text";
import { Title } from "@/shared/ui/kit/title";

export const Price = () => {
  const t = useTranslations("plansAndPricing.price");

  const handleOpenCatalogue = () => {
    window.open("/pricing_idelaria.pdf", "_blank");
  };

  return (
    <section className="mx-4  bg-white px-[60px] pt-[0] pb-[60px] first:pt-0 max-md:px-4">
      <div className="flex flex-col-reverse md:flex-row gap-10 bg-[#F5F4FD] items-center rounded-[8px] p-6">
        <Image
          src="/images/pricing/price.jpg"
          alt="Price"
          width={1000}
          height={1000}
          className="w-full md:w-[50%] max-md:w-full h-[200px] md:h-[220px] object-cover"
        />
        <div className="flex flex-col gap-4 w-full md:w-[50%] p-0 md:p-4">
          <Title size="3xl" weight={500} color="black">
            {t("title", { fallback: "Complete Overview of Idelaria Services" })}
          </Title>
          <Text color="black">
            {t("description", {
              fallback:
                "Access a structured PDF catalogue outlining all consulting services, engagement formats, and scope options available across business and marketing.",
            })}
          </Text>
          <Button
            className="max-md:w-full max-md:justify-center p-4 md:p-4"
            onClick={handleOpenCatalogue}
          >
            {t("button", { fallback: "Open Service Catalogue (PDF)" })}
            <ArrowRight color="black" />
          </Button>
        </div>
      </div>
    </section>
  );
};

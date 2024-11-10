import certificatesData from "@/data/CertificatesData"
import Image from "next/image"

export default function CertificatesHome() {
    const certificates = certificatesData;
    return (
        <div className="carousel my-4">
            {certificates.map((certificate) => (
                <div key={certificate.id} className="carousel-item mx-2 p-2 border-dashed border border-primary rounded-md">
                    <div>
                        <Image className="rounded" src={certificate.image} alt="..." height={500} width={500}></Image>
                        <h1 className="font-bold text-sm md:text-lg my-2">{certificate.title}</h1>
                        <div className="flex flex-row gap-2">
                        <p className="text-xs md:text-xs p-1 bg-primary rounded">{certificate.tag}</p>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
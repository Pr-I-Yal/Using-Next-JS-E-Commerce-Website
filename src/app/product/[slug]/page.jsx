import ProductPage from '@/PageComponents/ProductPage'
import React from 'react'

export async function generateMetadata({ params }) {
    let { slug } = await params;

    let productResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/product/${slug}`, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })

    if (!productResponse.ok) {
        return {
            title: "DashDeal - Product",
            description: "Explore products at DashDeal"
        };
    }

    let product = await productResponse.json()

    let seoResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/seoData`, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    })
    let seoData = [];

    if (seoResponse.ok) {
        seoData = await seoResponse.json();
    }

    // response = await seoResponse.json()

    let data = seoData.find(x => x.url === "/product")
    let keywords = data.keywords.replaceAll("{{productName}}", product.name)
    keywords = keywords.replace("{{brand}}", data.brand)
    keywords = keywords.replace("{{category}}", data.maincategory + "/" + data.subcategory)

    return {
        title: data?.title?.replace("{{productName}}", product.name) ?? `DashDeal - ${product.name}`,
        description: data?.description?.replace("{{productName}}", product.name) ?? "",
        keywords: keywords || []
    }
}

export default function page() {
    return <ProductPage />
}

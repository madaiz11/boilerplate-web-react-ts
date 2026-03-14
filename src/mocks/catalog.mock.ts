import { toCurrencyAmountBrandedType } from "@/core/types/branded/catalog.branded.type";
import type { CatalogCategory } from "@/core/types/catalog-category.type";
import type { CatalogItem } from "@/core/types/catalog.type";

export const categories: CatalogCategory[] = [
  { categoryId: "2", categoryName: "Electronics" },
  { categoryId: "3", categoryName: "Fashion" },
  { categoryId: "4", categoryName: "Home & Living" },
  { categoryId: "5", categoryName: "Sports & Outdoors" },
  { categoryId: "6", categoryName: "Books & Media" },
];

export const catalogItems: CatalogItem[] = [
  // Electronics
  {
    catalogId: "1",
    catalogName: "Wireless Headphones Pro",
    catalogPrice: toCurrencyAmountBrandedType(299.99),
    catalogDescription: "Premium noise-cancelling wireless headphones with 30-hour battery life",
    catalogImageUrl:
      "https://images.unsplash.com/photo-1717295248230-93ea71f48f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGdhZGdldHN8ZW58MXx8fHwxNzczNDU4NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    catalogInStock: true,
    categoryId: "2",
    categoryName: "Electronics",
    inStock: true,
  },
  {
    catalogId: "2",
    catalogName: "Smart Watch Ultra",
    catalogPrice: toCurrencyAmountBrandedType(449.99),
    catalogDescription: "Advanced fitness tracking, heart rate monitoring, and GPS navigation",
    catalogImageUrl:
      "https://images.unsplash.com/photo-1717295248230-93ea71f48f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGdhZGdldHN8ZW58MXx8fHwxNzczNDU4NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    catalogInStock: true,
    categoryId: "2",
    categoryName: "Electronics",
    inStock: true,
  },
  {
    catalogId: "3",
    catalogName: "4K Action Camera",
    catalogPrice: toCurrencyAmountBrandedType(199.99),
    catalogDescription: "Waterproof action camera with 4K video and image stabilization",
    catalogImageUrl:
      "https://images.unsplash.com/photo-1717295248230-93ea71f48f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGdhZGdldHN8ZW58MXx8fHwxNzczNDU4NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    catalogInStock: false,
    categoryId: "2",
    categoryName: "Electronics",
    inStock: false,
  },
  {
    catalogId: "4",
    catalogName: "Portable Power Bank 20000mAh",
    catalogPrice: toCurrencyAmountBrandedType(59.99),
    catalogDescription: "High-capacity power bank with fast charging support",
    catalogImageUrl:
      "https://images.unsplash.com/photo-1717295248230-93ea71f48f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGdhZGdldHN8ZW58MXx8fHwxNzczNDU4NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    catalogInStock: true,
    categoryId: "2",
    categoryName: "Electronics",
    inStock: true,
  },
  {
    catalogId: "5",
    catalogName: "Designer Leather Jacket",
    catalogPrice: toCurrencyAmountBrandedType(349.99),
    catalogDescription: "Genuine leather jacket with premium stitching and modern design",
    catalogImageUrl:
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzczNDU4NzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    catalogInStock: true,
    categoryId: "3",
    categoryName: "Fashion",
    inStock: true,
  },
  {
    catalogId: "6",
    catalogName: "Classic Denim Jeans",
    catalogPrice: toCurrencyAmountBrandedType(89.99),
    catalogDescription: "Comfortable fit denim jeans with classic styling",
    catalogImageUrl:
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzczNDU4NzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    catalogInStock: true,
    categoryId: "3",
    categoryName: "Fashion",
    inStock: true,
  },
  {
    catalogId: "7",
    catalogName: "Premium Cotton T-Shirt Pack",
    catalogPrice: toCurrencyAmountBrandedType(49.99),
    catalogDescription: "Set of 3 premium cotton t-shirts in various colors",
    catalogImageUrl:
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzczNDU4NzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    catalogInStock: true,
    categoryId: "3",
    categoryName: "Fashion",
    inStock: true,
  },
  {
    catalogId: "8",
    catalogName: "Running Sneakers",
    catalogPrice: toCurrencyAmountBrandedType(129.99),
    catalogDescription: "Lightweight running shoes with advanced cushioning technology",
    catalogImageUrl:
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzczNDU4NzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    catalogInStock: true,
    categoryId: "3",
    categoryName: "Fashion",
    inStock: true,
  },
  {
    catalogId: "9",
    catalogName: "Modern Coffee Table",
    catalogPrice: toCurrencyAmountBrandedType(299.99),
    catalogDescription: "Minimalist wooden coffee table with storage compartment",
    catalogImageUrl:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzczMzc3ODkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    catalogInStock: true,
    categoryId: "4",
    categoryName: "Home & Living",
    inStock: true,
  },
  {
    catalogId: "10",
    catalogName: "Luxury Bedding Set",
    catalogPrice: toCurrencyAmountBrandedType(179.99),
    catalogDescription: "Premium Egyptian cotton bedding set with duvet and pillows",
    catalogImageUrl:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzczMzc3ODkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    catalogInStock: true,
    categoryId: "4",
    categoryName: "Home & Living",
    inStock: true,
  },
  {
    catalogId: "11",
    catalogName: "Decorative Wall Art Set",
    catalogPrice: toCurrencyAmountBrandedType(149.99),
    catalogDescription: "Set of 3 modern abstract canvas prints for wall decoration",
    catalogImageUrl:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzczMzc3ODkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    catalogInStock: false,
    categoryId: "4",
    categoryName: "Home & Living",
    inStock: false,
  },
  {
    catalogId: "12",
    catalogName: "Smart LED Table Lamp",
    catalogPrice: toCurrencyAmountBrandedType(69.99),
    catalogDescription: "WiFi-enabled LED lamp with adjustable brightness and color",
    catalogImageUrl:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzczMzc3ODkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    catalogInStock: true,
    categoryId: "4",
    categoryName: "Home & Living",
    inStock: true,
  },
  {
    catalogId: "13",
    catalogName: "Yoga Mat Premium",
    catalogPrice: toCurrencyAmountBrandedType(49.99),
    catalogDescription: "Non-slip yoga mat with carrying strap and alignment marks",
    catalogImageUrl:
      "https://images.unsplash.com/photo-1691967057193-80a98a59b272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzaG9wcGluZyUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NzM0NTg3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    catalogInStock: true,
    categoryId: "5",
    categoryName: "Sports & Outdoors",
    inStock: true,
  },
  {
    catalogId: "14",
    catalogName: "Camping Tent 4-Person",
    catalogPrice: toCurrencyAmountBrandedType(189.99),
    catalogDescription: "Waterproof family tent with easy setup and ventilation",
    catalogImageUrl:
      "https://images.unsplash.com/photo-1691967057193-80a98a59b272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzaG9wcGluZyUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NzM0NTg3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    catalogInStock: true,
    categoryId: "5",
    categoryName: "Sports & Outdoors",
    inStock: true,
  },
  {
    catalogId: "15",
    catalogName: "Resistance Bands Set",
    catalogPrice: toCurrencyAmountBrandedType(29.99),
    catalogDescription: "5-piece resistance band set with various strength levels",
    catalogImageUrl:
      "https://images.unsplash.com/photo-1691967057193-80a98a59b272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzaG9wcGluZyUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NzM0NTg3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    catalogInStock: true,
    categoryId: "5",
    categoryName: "Sports & Outdoors",
    inStock: true,
  },
  {
    catalogId: "16",
    catalogName: "Business Strategy Guide",
    catalogPrice: toCurrencyAmountBrandedType(34.99),
    catalogDescription: "Comprehensive guide to modern business strategies and leadership",
    catalogImageUrl:
      "https://images.unsplash.com/photo-1691967057193-80a98a59b272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzaG9wcGluZyUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NzM0NTg3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    catalogInStock: true,
    categoryId: "6",
    categoryName: "Books & Media",
    inStock: true,
  },
  {
    catalogId: "17",
    catalogName: "Cooking Masterclass DVD",
    catalogPrice: toCurrencyAmountBrandedType(24.99),
    catalogDescription: "Professional cooking course with step-by-step video lessons",
    catalogImageUrl:
      "https://images.unsplash.com/photo-1691967057193-80a98a59b272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzaG9wcGluZyUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NzM0NTg3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    catalogInStock: true,
    categoryId: "6",
    categoryName: "Books & Media",
    inStock: true,
  },
  {
    catalogId: "18",
    catalogName: "Photography Basics Book",
    catalogPrice: toCurrencyAmountBrandedType(29.99),
    catalogDescription: "Complete guide to photography techniques and composition",
    catalogImageUrl:
      "https://images.unsplash.com/photo-1691967057193-80a98a59b272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzaG9wcGluZyUyMGxpZmVzdHlsZXxlbnwxfHx8fDE3NzM0NTg3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    catalogInStock: false,
    categoryId: "6",
    categoryName: "Books & Media",
    inStock: false,
  },
];

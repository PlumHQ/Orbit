declare function Breadcrumb({ listOfLinks, onCrumbClick, ellipsisPosition, maximumLinkCount, onBackButtonClick }: {
    listOfLinks: {
        label: string;
        href: string;
    }[];
    onCrumbClick?: (href: string, index?: number, truncatedList?: {
        label: string;
        href: string;
    }[]) => void;
    ellipsisPosition?: number | null;
    maximumLinkCount?: number;
    onBackButtonClick?: () => void;
}): import("react/jsx-runtime").JSX.Element;
export { Breadcrumb };

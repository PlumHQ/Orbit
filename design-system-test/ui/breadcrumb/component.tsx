import React,{ useState } from "react"
import { Slot } from "@radix-ui/react-slot"
import { SlashIcon, EllipsisIcon, LeftArrowIcon } from "@pluminsurance/design-system-test.icons"
import { cn } from "@pluminsurance/design-system-test.utilities"
import '@pluminsurance/design-system-test.styles';
import '@fontsource/inter';
import { Button } from "@pluminsurance/design-system-test.button";

function BreadcrumbLinkList({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

function Breadcrumb({ listOfLinks, onCrumbClick, ellipsisPosition = null, maximumLinkCount = listOfLinks.length, onBackButtonClick }: { listOfLinks: { label: string, href: string }[], onCrumbClick?: (href: string, index?: number, truncatedList?: { label: string, href: string }[]) => void, ellipsisPosition?: number | null, maximumLinkCount?: number, onBackButtonClick?: () => void }) {
  // If items fit within max count, return as-is
  const [linkList, setLinkList] = useState(listOfLinks);
  
  if (!maximumLinkCount || linkList.length <= maximumLinkCount || !ellipsisPosition || ellipsisPosition >= linkList.length) {
    return (
      <BreadcrumbLinkList className="flex items-center gap-1.5">
        <Button
          label={'Back'}
          variant="tertiary"
          styleVariant="beige"
          size="medium"
          iconOnly={true}
          leadingIcon={LeftArrowIcon}
          onClick={onBackButtonClick}
          disabled={linkList.length === 1}
        />
        <BreadcrumbList>
          {linkList.map((link, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <button onClick={() => {
                    setLinkList(linkList.slice(0, index + 1));
                    onCrumbClick?.(link.href, index, linkList.slice(0, index + 1));
                  }} aria-current={index === linkList.length - 1 ? "page" : undefined} aria-label={link.label} aria-disabled={index === linkList.length - 1}>
                    {link.label}
                  </button>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < linkList.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </BreadcrumbLinkList>
    )
  }

  // Calculate truncation
  const resolvedEllipsisPosition = ellipsisPosition ? ellipsisPosition + 1 : 0;
  const itemsAfterEllipsis = maximumLinkCount - resolvedEllipsisPosition - 1;
  const hiddenStartIndex = resolvedEllipsisPosition;
  const hiddenEndIndex = linkList.length - itemsAfterEllipsis;
  const hiddenItems = linkList.slice(hiddenStartIndex, hiddenEndIndex); // items to be hidden
  const lastItems = itemsAfterEllipsis > 0 ? linkList.slice(-itemsAfterEllipsis) : [];
  const truncatedList = linkList.slice(0, resolvedEllipsisPosition);
  console.log(truncatedList, itemsAfterEllipsis, hiddenItems, lastItems);

  return (
    <BreadcrumbLinkList className="flex items-center gap-1.5">
      <Button
        label={'Back'}
        variant="tertiary"
        styleVariant="beige"
        size="medium"
        iconOnly={true}
        leadingIcon={LeftArrowIcon}
        onClick={onBackButtonClick}
      />
      <BreadcrumbList>
        {/* Items before ellipsis */}
        {truncatedList.map((link, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <button onClick={() => {
                  setLinkList(linkList.slice(0, index + 1));
                  onCrumbClick?.(link.href, index, linkList.slice(0, index + 1));
                }}>
                  {link.label}
                </button>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </React.Fragment>
        ))}

        {/* Ellipsis with dropdown */}
        <BreadcrumbItem className="relative">
          <BreadcrumbEllipsis />
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        {/* Items after ellipsis */}
        {lastItems.map((link, index) => (
          <React.Fragment key={`last-${index}`}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <button onClick={() => {
                  const actualIndex = ellipsisPosition + hiddenItems.length + index;
                  onCrumbClick?.(link.href, actualIndex, linkList.slice(0, actualIndex + 1));
                }}>
                  {link.label}
                </button>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < lastItems.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </BreadcrumbLinkList>
  )
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("font-primary text-interactive-text-beige-muted inline-flex items-center gap-1.5 px-1 hover:text-interactive-text-beige-subtle cursor-pointer hover:underline", className)}
      {...props}
    />
  )
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("hover:text-foreground transition-colors", className)}
      {...props as any}
    />
  )
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <SlashIcon className="fill-surface-icon-beige-muted" size="large" />}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <div className="h-6 w-6 flex items-center justify-center">
        <EllipsisIcon className="fill-surface-icon-beige-muted" size="extra-large" />
      </div>
    </span>
  )
}

export {
  Breadcrumb
}

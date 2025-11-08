import CodeBlock from '@/app/(main)/blog/components/code-block';
import CodeSnippetHeader from '@/app/(main)/blog/components/code-snippet-header';
import Alert from '@/strum/alert';
import Heading from '@/strum/heading';
import HeadingWithIcon, {
  HeadingWithIconProperties,
} from '@/strum/heading-with-icon';
import LightboxProperties from '@/strum/lightbox';
import Section from '@/strum/section';
import Separator from '@/strum/separator';
import { Url } from 'next/dist/shared/lib/router/router';
import Image from 'next/image';
import Link from 'next/link';
import {
  AnchorHTMLAttributes,
  ClassAttributes,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';
import { JSX } from 'react/jsx-runtime';
import { twMerge } from 'tailwind-merge';

export const CustomMDXComponents = {
  a: (
    properties: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLAnchorElement> &
      AnchorHTMLAttributes<HTMLAnchorElement>,
  ) =>
    properties.href?.includes('http') ? (
      <a className={twMerge(properties.className, 'link')} {...properties} />
    ) : (
      <Link className={properties.className} href={properties.href as Url}>
        {properties.children}
      </Link>
    ),
  Alert,
  CodeBlock,
  CodeSnippetHeader,
  h1: ({ children }: PropsWithChildren) => (
    <Heading level={1}>{children}</Heading>
  ),
  h2: ({ children }: PropsWithChildren) => (
    <Heading className="mt-8" level={2}>
      {children}
    </Heading>
  ),
  h3: ({ children }: PropsWithChildren) => (
    <Heading className="mt-8" level={3}>
      {children}
    </Heading>
  ),
  h4: ({ children }: PropsWithChildren) => (
    <Heading className="mt-8" level={4}>
      {children}
    </Heading>
  ),
  h5: ({ children }: PropsWithChildren) => (
    <Heading className="mt-8" level={5}>
      {children}
    </Heading>
  ),
  h6: ({ children }: PropsWithChildren) => (
    <Heading className="mt-8" level={6}>
      {children}
    </Heading>
  ),
  HeadingWithIcon: (properties: HeadingWithIconProperties) => (
    <HeadingWithIcon className="mt-16" {...properties} />
  ),
  Image,
  Lightbox: LightboxProperties,
  Link,
  p: ({ children }: PropsWithChildren) => <p className="mt-4">{children}</p>,
  pre: (
    properties: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLPreElement> &
      HTMLAttributes<HTMLPreElement>,
  ) => <pre {...properties} className="whitespace-pre-wrap" />,
  Section,
  Separator,
};

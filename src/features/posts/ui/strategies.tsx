'use client';

import { memo } from 'react';

import { cn } from '@/shared/lib/utils/styles';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import type { Children, Children2 } from '../model/types';

export const PolicyStrategies = memo(
  ({ node, type }: { node: Children; type: string }) => {
    if (type === 'heading') {
      return (
        <Title
          key={`${node.type}-${type}`}
          as="h2"
          size="2xl"
          weight={700}
          className="pt-10"
        >
          {node.children?.map(item => (
            <span key={item.text} id={item.text}>
              {item.text}
            </span>
          ))}
        </Title>
      );
    }

    if (type === 'paragraph') {
      return (
        <div key={`${node.type}-${type}`} className="mt-4">
          <Text color="dark">
            {node.children?.map((item, i) => {
              if (item.type === 'linebreak') {
                return <br key={`br-${i}`} />;
              }

              if (item.type === 'link') {
                return (
                  <a
                    key={`link-${i}`}
                    href={item.fields?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.children?.map((child, j) => (
                      <span
                        key={`link-text-${j}`}
                        className="text-sm font-bold text-[#272727] underline decoration-solid underline-offset-auto"
                      >
                        {child.text}
                      </span>
                    ))}
                  </a>
                );
              }

              return (
                <span
                  key={`text-${i}`}
                  className={cn(item.format === 1 && 'font-bold')}
                >
                  {item.text}
                </span>
              );
            })}
          </Text>
        </div>
      );
    }

    if (type === 'list') {
      return (
        <ul
          key={`${node.type}-${type}`}
          className={cn(
            'mt-4 ml-3.5 text-[#272727]',
            node.listType === 'bullet' ? 'list-disc' : 'list-decimal',
          )}
        >
          {node.children?.map((item, i) => (
            <li key={`li-${i}`}>
              <ListItem value={item.children} />
            </li>
          ))}
        </ul>
      );
    }

    return null;
  },
);

PolicyStrategies.displayName = 'PolicyStrategies';

const ListItem = ({ value }: { value?: Children2[] }) => {
  if (!value) return null;

  return value.map((item, i) => {
    if (item.type === 'link') {
      return (
        <a
          key={`link-${i}`}
          href={item.fields?.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.children?.map((child, j) => (
            <span
              key={`link-text-${j}`}
              className="text-sm font-bold text-[#272727] underline decoration-solid underline-offset-auto"
            >
              {child.text}
            </span>
          ))}
        </a>
      );
    }

    return (
      <span
        key={`list-text-${i}`}
        className={cn(
          'text-sm text-[#272727]',
          item.format === 1 && 'font-bold',
        )}
      >
        {item.text}
      </span>
    );
  });
};

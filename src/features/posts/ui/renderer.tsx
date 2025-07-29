import type { Children } from '../model/types';
import { PolicyContentLayout } from './content-layout';
import { PolicyStrategies } from './strategies';

export const PolicyRenderer = ({ content }: { content: Children[] }) => (
  <PolicyContentLayout>
    {!Array.isArray(content) ? null : (
      <>
        {content.map((node, i) => (
          <PolicyStrategies
            key={String(`node-${i}`)}
            node={node}
            type={node.type}
          />
        ))}
      </>
    )}
  </PolicyContentLayout>
);

import { VNode } from 'preact';
import { Readable } from 'stream';

interface Options {
  shallow?: boolean;
  xml?: boolean;
}

export default function renderToNodeStream(vnode: VNode, context?: any, options?: Options): Readable;
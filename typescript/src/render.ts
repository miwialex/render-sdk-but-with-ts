import { Client as WorkflowsClient } from './workflows/client/index.js';
import type { ClientOptions } from './workflows/client/types.js';

/**
 * Main Render SDK class providing access to all Render products
 */
export class Render {
  public readonly workflows: WorkflowsClient;

  /**
   * Create a new Render SDK instance
   * @param options Client configuration options
   */
  constructor(options?: ClientOptions) {
    this.workflows = new WorkflowsClient(options);
  }
}

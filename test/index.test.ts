import { describe, expect, it } from 'vitest';
import { runScenario } from '../src/index';

describe('automation scenario', () => {
  it('returns real estate report items', async () => {
    const result = await runScenario({ scenario: 'real_estate', dryRun: true }, { ALLOW_LIVE_TRADING: 'false' });
    expect(result.items.length).toBeGreaterThan(0);
    expect(result.items[0].scenario).toBe('real_estate');
  });

  it('blocks live execution by default', async () => {
    await expect(runScenario({ scenario: 'trading_sim', dryRun: false }, { ALLOW_LIVE_TRADING: 'false' })).rejects.toThrow(/Live execution is disabled/);
  });
});

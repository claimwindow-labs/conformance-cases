# ClaimWindow / conformance-cases

Portable JSON boundary vectors. Check out predicate-engine beside this repository; run `npm test`.

Developer preview for Stellar native claimable balances. This project analyzes conditions; it does not hold keys, guarantee reclaimability under all account conditions, or submit mainnet transactions. Ledger close times use integer Unix seconds and interval ends are exclusive. Relative conditions require the original creation ledger close time, not a later modification time.

## Workspace setup
Clone the five repositories under https://github.com/claimwindow-labs into one directory with their repository names. The timeline and API import the adjacent predicate-engine.

## Contributions
See CONTRIBUTING.md. Test failures and minimal counterexamples are welcome. No usage or production-readiness claims are implied by this initial release.

## References
https://developers.stellar.org/docs/build/guides/transactions/claimable-balances

## CI
Workspace conformance CI checks all five public components. Related repositories are checked out at their current main branch; the run log records the exact commits. Testnet pilot is opt-in and excluded from CI.

/* ============================================================================
   ZAVARI CONCEPTS — App shell (nav rail, routing, variant toggles, pager)
   ============================================================================ */
(function () {
  const K = window.ZVKit;
  const { Icon, Mono } = K;

  // Screen registry — comp resolved lazily from window
  const GROUPS = [
    { group: 'Intelligence', items: [
      { id: 'command', label: 'Command Layer', icon: 'command', comp: () => window.CommandLayer, variants: [{ k: 'briefing', l: 'Briefing' }, { k: 'console', l: 'Console' }] },
      { id: 'brief', label: 'Opportunity Brief', icon: 'brief', comp: () => window.OpportunityBrief, variants: [{ k: 'memo', l: 'Memo' }, { k: 'desk', l: 'Decision desk' }] },
      { id: 'coherence', label: 'Coherence Map', icon: 'coherence', comp: () => window.CoherenceMap, variants: [{ k: 'map', l: 'Constellation' }, { k: 'ledger', l: 'Ledger' }] },
      { id: 'decision', label: 'Decision Record', icon: 'decision', comp: () => window.DecisionRecord },
    ] },
    { group: 'Workspace', items: [
      { id: 'strategy', label: 'Strategy / OKR', icon: 'strategy', comp: () => window.StrategyOKR },
      { id: 'planning', label: 'Planning / Roadmap', icon: 'planning', comp: () => window.PlanningRoadmap },
      { id: 'research', label: 'Research', icon: 'research', comp: () => window.ResearchScreen },
    ] },
    { group: 'Platform', items: [
      { id: 'ecosystem', label: 'Ecosystem', icon: 'ecosystem', comp: () => window.EcosystemMap, variants: [{ k: 'stack', l: 'Layered' }, { k: 'orbit', l: 'Orbit' }] },
      { id: 'onboarding', label: 'Get started', icon: 'onboarding', comp: () => window.Onboarding },
    ] },
  ];
  const FLAT = GROUPS.flatMap(g => g.items);
  const NARRATIVE = ['command', 'brief', 'coherence', 'decision', 'ecosystem', 'strategy', 'planning', 'research', 'onboarding'];
  const byId = (id) => FLAT.find(s => s.id === id);

  const LOGO = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODcxLjMiIGhlaWdodD0iMTczLjgiIHZpZXdCb3g9IjAgMCA4NzEuMyAxNzMuOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMjQ0LCA3LjkwMCkiPgogIDxwYXRoIGQ9Ik0zNC43NTAxIDYuMDkxNTdDMzguNTE3OSAyLjE5ODE3IDQzLjcwNDEgMCA0OS4xMjIxIDBIMTc5Ljg0NEMxODUuMTQyIDAgMTg3Ljg0IDYuMzY1MjggMTg0LjE1NiAxMC4xNzI1TDE1OS4yNSAzNS45MDg0QzE1NS40ODIgMzkuODAxOCAxNTAuMjk2IDQyIDE0NC44NzggNDJINjguNjc3NEgxNC4xNTZDOC44NTc4NiA0MiA2LjE1OTk0IDM1LjYzNDcgOS44NDQzOCAzMS44Mjc1TDM0Ljc1MDEgNi4wOTE1N1oiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzE4KSI+PC9wYXRoPgogIDxwYXRoIGQ9Ik01MC43NTAxIDY0LjA5MTZDNTQuNTE3OSA2MC4xOTgyIDU5LjcwNDEgNTggNjUuMTIyMSA1OEgxOTUuODQ0QzIwMS4xNDIgNTggMjAzLjg0IDY0LjM2NTMgMjAwLjE1NiA2OC4xNzI1TDE3NS4yNSA5My45MDg0QzE3MS40ODIgOTcuODAxOCAxNjYuMjk2IDEwMCAxNjAuODc4IDEwMEg4NC42Nzc0SDMwLjE1NkMyNC44NTc5IDEwMCAyMi4xNTk5IDkzLjYzNDcgMjUuODQ0NCA4OS44Mjc1TDUwLjc1MDEgNjQuMDkxNloiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8xXzE4KSI+PC9wYXRoPgogIDxwYXRoIGQ9Ik02Ni43NTAxIDEyMi4wOTJDNzAuNTE3OSAxMTguMTk4IDc1LjcwNDEgMTE2IDgxLjEyMjEgMTE2SDIxMS44NDRDMjE3LjE0MiAxMTYgMjE5Ljg0IDEyMi4zNjUgMjE2LjE1NiAxMjYuMTczTDE5MS4yNSAxNTEuOTA4QzE4Ny40ODIgMTU1LjgwMiAxODIuMjk2IDE1OCAxNzYuODc4IDE1OEgxMTYuNjc3SDQ2LjE1NkM0MC44NTc5IDE1OCAzOC4xNTk5IDE1MS42MzUgNDEuODQ0NCAxNDcuODI3TDY2Ljc1MDEgMTIyLjA5MloiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl8xXzE4KSI+PC9wYXRoPgo8L2c+CjxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0NC40NzIsIDE1LjgwMCkgc2NhbGUoMi4xODE1MikgdHJhbnNsYXRlKC04LjE1NiwgLTE3Ni45MDgpIiBkPSJNNjcuMjA4NSAyMjYuNTUyQzY3LjY1NjUgMjI2LjgzMiA2Ny44ODA1IDIyNy4xNjggNjcuODgwNSAyMjcuNTZDNjcuODgwNSAyMjcuNzI4IDY3Ljc5NjUgMjI3Ljk4IDY3LjYyODUgMjI4LjMxNkw2MC45MDg1IDI0MS40MkM2MC42Mjg1IDI0MS44NjggNjAuMjkyNSAyNDIuMDkyIDU5LjkwMDUgMjQyLjA5MkM1OS41NjQ1IDI0Mi4wOTIgNTkuMzEyNSAyNDIuMDA4IDU5LjE0NDUgMjQxLjg0TDU4LjcyNDUgMjQxLjQyQzU4LjUwMDUgMjQxLjE5NiA1OC4yNDg1IDI0MS4wNTYgNTcuOTY4NSAyNDFDNTcuNjg4NSAyNDEgNTcuNDA4NSAyNDEgNTcuMTI4NSAyNDFIOS40MTY0OEM4LjU3NjQ4IDI0MSA4LjE1NjQ4IDI0MC41OCA4LjE1NjQ4IDIzOS43NFYyMzUuMTJDOC4xNTY0OCAyMzQuNTYgOC4zNTI0OCAyMzQgOC43NDQ0OCAyMzMuNDRMNDYuNTQ0NSAxODQuODA0SDMyLjI2NDVDMjkuNzQ0NSAxODQuODA0IDI3LjU4ODUgMTg1LjE5NiAyNS43OTY1IDE4NS45OEMyNC4wNjA1IDE4Ni43MDggMjIuNTIwNSAxODcuNzQ0IDIxLjE3NjUgMTg5LjA4OEMxOS44ODg1IDE5MC4zNzYgMTguNTcyNSAxOTEuODMyIDE3LjIyODUgMTkzLjQ1NkwxNi44OTI1IDE5My44NzZDMTYuNTAwNSAxOTQuMzggMTYuMTY0NSAxOTQuNjMyIDE1Ljg4NDUgMTk0LjYzMkMxNS42NjA1IDE5NC42MzIgMTUuNDA4NSAxOTQuNTQ4IDE1LjEyODUgMTk0LjM4TDExLjYwMDUgMTkyLjQ0OEMxMS4xNTI1IDE5Mi4xNjggMTAuOTI4NSAxOTEuODMyIDEwLjkyODUgMTkxLjQ0QzEwLjkyODUgMTkxLjI3MiAxMS4wMTI1IDE5MS4wMiAxMS4xODA1IDE5MC42ODRMMTcuODE2NSAxNzcuNThDMTguMDQwNSAxNzcuMTMyIDE4LjQwNDUgMTc2LjkwOCAxOC45MDg1IDE3Ni45MDhDMTkuMDc2NSAxNzYuOTA4IDE5LjIxNjUgMTc2LjkzNiAxOS4zMjg1IDE3Ni45OTJDMTkuNDk2NSAxNzcuMDQ4IDE5Ljc0ODUgMTc3LjI0NCAyMC4wODQ1IDE3Ny41OEMyMC4zMDg1IDE3Ny44MDQgMjAuNTYwNSAxNzcuOTQ0IDIwLjg0MDUgMTc4QzIxLjEyMDUgMTc4IDIxLjQwMDUgMTc4IDIxLjY4MDUgMTc4SDY2LjYyMDVDNjYuOTU2NSAxNzggNjcuMTI0NSAxNzguMTQgNjcuMTI0NSAxNzguNDJWMTc4Ljg0QzY3LjEyNDUgMTc5LjAwOCA2Ny4wNjg1IDE3OS4xNzYgNjYuOTU2NSAxNzkuMzQ0QzY2Ljg0NDUgMTc5LjUxMiA2Ni43MzI1IDE3OS42OCA2Ni42MjA1IDE3OS44NDhMMjUuMzc2NSAyMzMuMzU2SDM2LjcxNjVDNDEuOTI0NSAyMzMuMzU2IDQ2LjEyNDUgMjMzLjA3NiA0OS4zMTY1IDIzMi41MTZDNTIuNTY0NSAyMzEuOTU2IDU1LjE0MDUgMjMxLjExNiA1Ny4wNDQ1IDIyOS45OTZDNTguOTQ4NSAyMjguODIgNjAuNDYwNSAyMjcuMzY0IDYxLjU4MDUgMjI1LjYyOEw2MS45MTY1IDIyNS4xMjRDNjIuMTk2NSAyMjQuNjIgNjIuNTMyNSAyMjQuMzY4IDYyLjkyNDUgMjI0LjM2OEM2My4yMDQ1IDIyNC4zNjggNjMuNDU2NSAyMjQuNDUyIDYzLjY4MDUgMjI0LjYyTDY3LjIwODUgMjI2LjU1MlpNMTEzLjg0OCAyMjUuNDZDMTEzLjg0OCAyMjcuNDc2IDExNC4xNTYgMjI5LjI5NiAxMTQuNzcyIDIzMC45MkMxMTUuMzg4IDIzMi40ODggMTE2LjczMiAyMzMuNDEyIDExOC44MDQgMjMzLjY5MkMxMTkuNDc2IDIzMy43NDggMTE5LjgxMiAyMzQuMTEyIDExOS44MTIgMjM0Ljc4NFYyMzcuNTU2QzExOS44MTIgMjM4LjM0IDExOS4zOTIgMjM4LjczMiAxMTguNTUyIDIzOC43MzJDMTE1LjgwOCAyMzguNzMyIDExMy41MTIgMjM4LjkgMTExLjY2NCAyMzkuMjM2QzEwOS44NzIgMjM5LjUxNiAxMDguMzA0IDIzOS45MDggMTA2Ljk2IDI0MC40MTJDMTA1LjY3MiAyNDAuODYgMTA0LjM4NCAyNDEuMzY0IDEwMy4wOTYgMjQxLjkyNEMxMDIuODcyIDI0Mi4wMzYgMTAyLjY3NiAyNDIuMDkyIDEwMi41MDggMjQyLjA5MkgxMDIuMjU2QzEwMi4xNDQgMjQyLjA5MiAxMDIuMDg4IDI0MS45OCAxMDIuMDg4IDI0MS43NTZDMTAyLjA4OCAyNDEuNTMyIDEwMi4xNDQgMjQxIDEwMi4yNTYgMjQwLjE2QzEwMi4zNjggMjM5LjI2NCAxMDIuNDggMjM4LjI4NCAxMDIuNTkyIDIzNy4yMkMxMDIuNzYgMjM2LjEgMTAyLjkgMjM1LjE0OCAxMDMuMDEyIDIzNC4zNjRDMTAyLjczMiAyMzUuMDkyIDEwMi4xMTYgMjM2LjA3MiAxMDEuMTY0IDIzNy4zMDRDMTAwLjI2OCAyMzguNTM2IDk4LjkyNDIgMjM5LjY1NiA5Ny4xMzIyIDI0MC42NjRDOTUuMzk2MiAyNDEuNjE2IDkzLjEwMDIgMjQyLjA5MiA5MC4yNDQyIDI0Mi4wOTJDODguMzQwMiAyNDIuMDkyIDg2LjI5NjIgMjQxLjcgODQuMTEyMiAyNDAuOTE2QzgxLjk4NDIgMjQwLjEzMiA3OS45NjgyIDIzOC44NzIgNzguMDY0MiAyMzcuMTM2Qzc2LjE2MDIgMjM1LjQgNzQuNTkyMiAyMzMuMTMyIDczLjM2MDIgMjMwLjMzMkM3Mi4xODQyIDIyNy40NzYgNzEuNTk2MiAyMjQuMDA0IDcxLjU5NjIgMjE5LjkxNkM3MS41OTYyIDIxNC43MDggNzIuNTIwMiAyMTAuNTA4IDc0LjM2ODIgMjA3LjMxNkM3Ni4yNzIyIDIwNC4wNjggNzguNzA4MiAyMDEuNjg4IDgxLjY3NjIgMjAwLjE3NkM4NC43MDAyIDE5OC42NjQgODcuODkyMiAxOTcuOTA4IDkxLjI1MjIgMTk3LjkwOEM5My45OTYyIDE5Ny45MDggOTYuNTE2MiAxOTguMzI4IDk4LjgxMjIgMTk5LjE2OEMxMDEuMTA4IDIwMC4wMDggMTAzLjEyNCAyMDEuMjEyIDEwNC44NiAyMDIuNzhDMTA2LjMxNiAyMDIuMTY0IDEwNy41NDggMjAxLjYwNCAxMDguNTU2IDIwMS4xQzEwOS42MiAyMDAuNTQgMTEwLjUxNiAxOTkuOTggMTExLjI0NCAxOTkuNDJDMTExLjUyNCAxOTkuMTk2IDExMS44MDQgMTk4Ljk3MiAxMTIuMDg0IDE5OC43NDhDMTEyLjQyIDE5OC41MjQgMTEyLjc4NCAxOTguMyAxMTMuMTc2IDE5OC4wNzZDMTEzLjM0NCAxOTcuOTY0IDExMy40ODQgMTk3LjkwOCAxMTMuNTk2IDE5Ny45MDhIMTEzLjY4QzExMy43OTIgMTk3LjkwOCAxMTMuODQ4IDE5Ny45NjQgMTEzLjg0OCAxOTguMDc2VjIyNS40NlpNMTAyLjA4OCAyMTIuMjcyQzEwMS45MiAyMTEuMTUyIDEwMS41IDIwOS45MiAxMDAuODI4IDIwOC41NzZDMTAwLjIxMiAyMDcuMTc2IDk5LjI2MDIgMjA2IDk3Ljk3MjIgMjA1LjA0OEM5Ni42ODQyIDIwNC4wNCA5NC45NDgyIDIwMy41MzYgOTIuNzY0MiAyMDMuNTM2QzkwLjA3NjIgMjAzLjUzNiA4Ny45NzYyIDIwNC4yMDggODYuNDY0MiAyMDUuNTUyQzg0Ljk1MjIgMjA2Ljg0IDgzLjg4ODIgMjA4LjUyIDgzLjI3MjIgMjEwLjU5MkM4Mi43MTIyIDIxMi42NjQgODIuNDMyMiAyMTQuODc2IDgyLjQzMjIgMjE3LjIyOEM4Mi40MzIyIDIyMi42MDQgODMuNDk2MiAyMjYuODYgODUuNjI0MiAyMjkuOTk2Qzg3LjgwODIgMjMzLjEzMiA5MC42MDgyIDIzNC43IDk0LjAyNDIgMjM0LjdDOTYuMDQwMiAyMzQuNyA5Ny42MDgyIDIzNC4yOCA5OC43MjgyIDIzMy40NEM5OS45MDQyIDIzMi41NDQgMTAwLjc0NCAyMzEuNjQ4IDEwMS4yNDggMjMwLjc1MkMxMDEuNzUyIDIyOS44NTYgMTAyLjAzMiAyMjkuMzI0IDEwMi4wODggMjI5LjE1NlYyMTIuMjcyWk0xNjcuMTc3IDE5OUMxNjguMDE3IDE5OSAxNjguNDM3IDE5OS40MiAxNjguNDM3IDIwMC4yNlYyMDIuNzhDMTY4LjQzNyAyMDMuNjIgMTY4LjAxNyAyMDQuMDQgMTY3LjE3NyAyMDQuMDRIMTY1LjkxN0MxNjUuMDIxIDIwNC4wNCAxNjQuMjA5IDIwNC4zNzYgMTYzLjQ4MSAyMDUuMDQ4QzE2Mi44MDkgMjA1LjcyIDE2MS45OTcgMjA3LjEyIDE2MS4wNDUgMjA5LjI0OEwxNDYuODQ5IDI0MC4wNzZDMTQ2LjU2OSAyNDAuNjkyIDE0Ni4xNDkgMjQxIDE0NS41ODkgMjQxSDE0MC44MDFDMTQwLjE4NSAyNDEgMTM5LjczNyAyNDAuNjkyIDEzOS40NTcgMjQwLjA3NkwxMjUuMzQ1IDIwOS4zMzJDMTI0LjM5MyAyMDcuMjA0IDEyMy42MDkgMjA1LjgwNCAxMjIuOTkzIDIwNS4xMzJDMTIyLjQzMyAyMDQuNDA0IDEyMS41OTMgMjA0LjA0IDEyMC40NzMgMjA0LjA0SDEyMC4zMDVDMTE5LjQ2NSAyMDQuMDQgMTE5LjA0NSAyMDMuNjIgMTE5LjA0NSAyMDIuNzhWMjAwLjI2QzExOS4wNDUgMTk5LjQyIDExOS40NjUgMTk5IDEyMC4zMDUgMTk5SDEzOS43MDlDMTQwLjU0OSAxOTkgMTQwLjk2OSAxOTkuNDIgMTQwLjk2OSAyMDAuMjZWMjAyLjc4QzE0MC45NjkgMjAzLjYyIDE0MC41NDkgMjA0LjA0IDEzOS43MDkgMjA0LjA0SDEzOS41NDFDMTM4LjQ3NyAyMDQuMDQgMTM3LjcyMSAyMDQuMjY0IDEzNy4yNzMgMjA0LjcxMkMxMzYuODgxIDIwNS4xMDQgMTM2LjY4NSAyMDUuNjkyIDEzNi42ODUgMjA2LjQ3NkMxMzYuNjg1IDIwNy4yMDQgMTM2LjgyNSAyMDguMDE2IDEzNy4xMDUgMjA4LjkxMkMxMzcuNDQxIDIwOS44MDggMTM3Ljg4OSAyMTAuODQ0IDEzOC40NDkgMjEyLjAyTDE0Ni4xNzcgMjI4LjRMMTUzLjIzMyAyMTIuMDJDMTUzLjc5MyAyMTAuNzMyIDE1NC4yNjkgMjA5LjU1NiAxNTQuNjYxIDIwOC40OTJDMTU1LjA1MyAyMDcuNDI4IDE1NS4yNDkgMjA2LjUzMiAxNTUuMjQ5IDIwNS44MDRDMTU1LjI0OSAyMDQuNjI4IDE1NC42MzMgMjA0LjA0IDE1My40MDEgMjA0LjA0SDE1MS43MjFDMTUwLjg4MSAyMDQuMDQgMTUwLjQ2MSAyMDMuNjIgMTUwLjQ2MSAyMDIuNzhWMjAwLjI2QzE1MC40NjEgMTk5LjQyIDE1MC44ODEgMTk5IDE1MS43MjEgMTk5SDE2Ny4xNzdaTTIxMS4yMTkgMjI1LjQ2QzIxMS4yMTkgMjI3LjQ3NiAyMTEuNTI3IDIyOS4yOTYgMjEyLjE0MyAyMzAuOTJDMjEyLjc1OSAyMzIuNDg4IDIxNC4xMDMgMjMzLjQxMiAyMTYuMTc1IDIzMy42OTJDMjE2Ljg0NyAyMzMuNzQ4IDIxNy4xODMgMjM0LjExMiAyMTcuMTgzIDIzNC43ODRWMjM3LjU1NkMyMTcuMTgzIDIzOC4zNCAyMTYuNzYzIDIzOC43MzIgMjE1LjkyMyAyMzguNzMyQzIxMy4xNzkgMjM4LjczMiAyMTAuODgzIDIzOC45IDIwOS4wMzUgMjM5LjIzNkMyMDcuMjQzIDIzOS41MTYgMjA1LjY3NSAyMzkuOTA4IDIwNC4zMzEgMjQwLjQxMkMyMDMuMDQzIDI0MC44NiAyMDEuNzU1IDI0MS4zNjQgMjAwLjQ2NyAyNDEuOTI0QzIwMC4yNDMgMjQyLjAzNiAyMDAuMDQ3IDI0Mi4wOTIgMTk5Ljg3OSAyNDIuMDkySDE5OS42MjdDMTk5LjUxNSAyNDIuMDkyIDE5OS40NTkgMjQxLjk4IDE5OS40NTkgMjQxLjc1NkMxOTkuNDU5IDI0MS41MzIgMTk5LjUxNSAyNDEgMTk5LjYyNyAyNDAuMTZDMTk5LjczOSAyMzkuMjY0IDE5OS44NTEgMjM4LjI4NCAxOTkuOTYzIDIzNy4yMkMyMDAuMTMxIDIzNi4xIDIwMC4yNzEgMjM1LjE0OCAyMDAuMzgzIDIzNC4zNjRDMjAwLjEwMyAyMzUuMDkyIDE5OS40ODcgMjM2LjA3MiAxOTguNTM1IDIzNy4zMDRDMTk3LjYzOSAyMzguNTM2IDE5Ni4yOTUgMjM5LjY1NiAxOTQuNTAzIDI0MC42NjRDMTkyLjc2NyAyNDEuNjE2IDE5MC40NzEgMjQyLjA5MiAxODcuNjE1IDI0Mi4wOTJDMTg1LjcxMSAyNDIuMDkyIDE4My42NjcgMjQxLjcgMTgxLjQ4MyAyNDAuOTE2QzE3OS4zNTUgMjQwLjEzMiAxNzcuMzM5IDIzOC44NzIgMTc1LjQzNSAyMzcuMTM2QzE3My41MzEgMjM1LjQgMTcxLjk2MyAyMzMuMTMyIDE3MC43MzEgMjMwLjMzMkMxNjkuNTU1IDIyNy40NzYgMTY4Ljk2NyAyMjQuMDA0IDE2OC45NjcgMjE5LjkxNkMxNjguOTY3IDIxNC43MDggMTY5Ljg5MSAyMTAuNTA4IDE3MS43MzkgMjA3LjMxNkMxNzMuNjQzIDIwNC4wNjggMTc2LjA3OSAyMDEuNjg4IDE3OS4wNDcgMjAwLjE3NkMxODIuMDcxIDE5OC42NjQgMTg1LjI2MyAxOTcuOTA4IDE4OC42MjMgMTk3LjkwOEMxOTEuMzY3IDE5Ny45MDggMTkzLjg4NyAxOTguMzI4IDE5Ni4xODMgMTk5LjE2OEMxOTguNDc5IDIwMC4wMDggMjAwLjQ5NSAyMDEuMjEyIDIwMi4yMzEgMjAyLjc4QzIwMy42ODcgMjAyLjE2NCAyMDQuOTE5IDIwMS42MDQgMjA1LjkyNyAyMDEuMUMyMDYuOTkxIDIwMC41NCAyMDcuODg3IDE5OS45OCAyMDguNjE1IDE5OS40MkMyMDguODk1IDE5OS4xOTYgMjA5LjE3NSAxOTguOTcyIDIwOS40NTUgMTk4Ljc0OEMyMDkuNzkxIDE5OC41MjQgMjEwLjE1NSAxOTguMyAyMTAuNTQ3IDE5OC4wNzZDMjEwLjcxNSAxOTcuOTY0IDIxMC44NTUgMTk3LjkwOCAyMTAuOTY3IDE5Ny45MDhIMjExLjA1MUMyMTEuMTYzIDE5Ny45MDggMjExLjIxOSAxOTcuOTY0IDIxMS4yMTkgMTk4LjA3NlYyMjUuNDZaTTE5OS40NTkgMjEyLjI3MkMxOTkuMjkxIDIxMS4xNTIgMTk4Ljg3MSAyMDkuOTIgMTk4LjE5OSAyMDguNTc2QzE5Ny41ODMgMjA3LjE3NiAxOTYuNjMxIDIwNiAxOTUuMzQzIDIwNS4wNDhDMTk0LjA1NSAyMDQuMDQgMTkyLjMxOSAyMDMuNTM2IDE5MC4xMzUgMjAzLjUzNkMxODcuNDQ3IDIwMy41MzYgMTg1LjM0NyAyMDQuMjA4IDE4My44MzUgMjA1LjU1MkMxODIuMzIzIDIwNi44NCAxODEuMjU5IDIwOC41MiAxODAuNjQzIDIxMC41OTJDMTgwLjA4MyAyMTIuNjY0IDE3OS44MDMgMjE0Ljg3NiAxNzkuODAzIDIxNy4yMjhDMTc5LjgwMyAyMjIuNjA0IDE4MC44NjcgMjI2Ljg2IDE4Mi45OTUgMjI5Ljk5NkMxODUuMTc5IDIzMy4xMzIgMTg3Ljk3OSAyMzQuNyAxOTEuMzk1IDIzNC43QzE5My40MTEgMjM0LjcgMTk0Ljk3OSAyMzQuMjggMTk2LjA5OSAyMzMuNDRDMTk3LjI3NSAyMzIuNTQ0IDE5OC4xMTUgMjMxLjY0OCAxOTguNjE5IDIzMC43NTJDMTk5LjEyMyAyMjkuODU2IDE5OS40MDMgMjI5LjMyNCAxOTkuNDU5IDIyOS4xNTZWMjEyLjI3MlpNMjM4Ljg0MyAyMDcuODJDMjQwLjM1NSAyMDQuNTcyIDI0Mi40NTUgMjAyLjEwOCAyNDUuMTQzIDIwMC40MjhDMjQ3LjgzMSAxOTguNzQ4IDI1MC42NTkgMTk3LjkwOCAyNTMuNjI3IDE5Ny45MDhDMjU2LjI1OSAxOTcuOTA4IDI1OC40OTkgMTk4LjYzNiAyNjAuMzQ3IDIwMC4wOTJDMjYyLjE5NSAyMDEuNTQ4IDI2My4xMTkgMjAzLjcwNCAyNjMuMTE5IDIwNi41NkMyNjMuMTE5IDIwNy43OTIgMjYzLjAwNyAyMDguODg0IDI2Mi43ODMgMjA5LjgzNkMyNjIuNTU5IDIxMC43ODggMjYxLjk0MyAyMTEuNDg4IDI2MC45MzUgMjExLjkzNkwyNTMuMDM5IDIxNS4xMjhDMjUyLjcwMyAyMTUuMjQgMjUyLjQ1MSAyMTUuMjk2IDI1Mi4yODMgMjE1LjI5NkMyNTEuNzc5IDIxNS4yOTYgMjUxLjUyNyAyMTUuMDQ0IDI1MS41MjcgMjE0LjU0QzI1MS41MjcgMjE0LjM3MiAyNTEuNTgzIDIxNC4xMiAyNTEuNjk1IDIxMy43ODRDMjUyLjAzMSAyMTMgMjUyLjIyNyAyMTIuMjQ0IDI1Mi4yODMgMjExLjUxNkMyNTIuMzk1IDIxMC43ODggMjUyLjQ1MSAyMTAuMTQ0IDI1Mi40NTEgMjA5LjU4NEMyNTIuNDUxIDIwOC4wNzIgMjUyLjA1OSAyMDYuOTggMjUxLjI3NSAyMDYuMzA4QzI1MC41NDcgMjA1LjU4IDI0OS42MjMgMjA1LjIxNiAyNDguNTAzIDIwNS4yMTZDMjQ3LjIxNSAyMDUuMjE2IDI0Ni4wMTEgMjA1LjYwOCAyNDQuODkxIDIwNi4zOTJDMjQzLjc3MSAyMDcuMTc2IDI0Mi43OTEgMjA4LjEyOCAyNDEuOTUxIDIwOS4yNDhDMjQxLjExMSAyMTAuMzY4IDI0MC40OTUgMjExLjQ2IDI0MC4xMDMgMjEyLjUyNFYyMjcuOThDMjQwLjEwMyAyMzAuMjIgMjQwLjYwNyAyMzIuMTI0IDI0MS42MTUgMjMzLjY5MkMyNDIuNjIzIDIzNS4yMDQgMjQ0LjE2MyAyMzUuOTYgMjQ2LjIzNSAyMzUuOTZIMjQ2LjQwM0MyNDcuMjQzIDIzNS45NiAyNDcuNjYzIDIzNi4zOCAyNDcuNjYzIDIzNy4yMlYyMzkuNzRDMjQ3LjY2MyAyNDAuNTggMjQ3LjI0MyAyNDEgMjQ2LjQwMyAyNDFIMjIxLjk1OUMyMjEuMTE5IDI0MSAyMjAuNjk5IDI0MC41OCAyMjAuNjk5IDIzOS43NFYyMzcuMjJDMjIwLjY5OSAyMzYuMzggMjIxLjExOSAyMzUuOTYgMjIxLjk1OSAyMzUuOTZIMjIyLjEyN0MyMjQuMTk5IDIzNS45NiAyMjUuNzM5IDIzNS4yMDQgMjI2Ljc0NyAyMzMuNjkyQzIyNy43NTUgMjMyLjEyNCAyMjguMjU5IDIzMC4yMiAyMjguMjU5IDIyNy45OFYyMTcuMzk2QzIyOC4yNTkgMjE1Ljg4NCAyMjguMTQ3IDIxNC40MjggMjI3LjkyMyAyMTMuMDI4QzIyNy43NTUgMjExLjYyOCAyMjcuMzM1IDIxMC40NTIgMjI2LjY2MyAyMDkuNUMyMjUuOTkxIDIwOC40OTIgMjI0Ljg3MSAyMDcuOTA0IDIyMy4zMDMgMjA3LjczNkMyMjIuNjMxIDIwNy42OCAyMjIuMjk1IDIwNy4zMTYgMjIyLjI5NSAyMDYuNjQ0VjIwMy43ODhDMjIyLjI5NSAyMDMuMjI4IDIyMi43MTUgMjAyLjg2NCAyMjMuNTU1IDIwMi42OTZDMjI3LjUzMSAyMDIuMDggMjMxLjAwMyAyMDEuMSAyMzMuOTcxIDE5OS43NTZDMjM2Ljk5NSAxOTguNDEyIDIzOS4wMzkgMTk3LjM0OCAyNDAuMTAzIDE5Ni41NjRDMjQwLjI3MSAxOTYuNDUyIDI0MC40MTEgMTk2LjM5NiAyNDAuNTIzIDE5Ni4zOTZIMjQwLjY5MUMyNDAuODAzIDE5Ni4zOTYgMjQwLjg1OSAxOTYuNDUyIDI0MC44NTkgMTk2LjU2NEMyNDAuODU5IDE5Ni42MiAyNDAuNzc1IDE5Ny4wNCAyNDAuNjA3IDE5Ny44MjRDMjQwLjQ5NSAxOTguNjA4IDI0MC4zMjcgMTk5LjYxNiAyNDAuMTAzIDIwMC44NDhDMjM5LjkzNSAyMDIuMDI0IDIzOS43MTEgMjAzLjI1NiAyMzkuNDMxIDIwNC41NDRDMjM5LjIwNyAyMDUuNzc2IDIzOS4wMTEgMjA2Ljg2OCAyMzguODQzIDIwNy44MlpNMjkwLjYxIDIzNS45NkMyOTEuNDUgMjM1Ljk2IDI5MS44NyAyMzYuMzggMjkxLjg3IDIzNy4yMlYyMzkuNzRDMjkxLjg3IDI0MC41OCAyOTEuMzk0IDI0MSAyOTAuNDQyIDI0MUgyNjYuNjdDMjY1LjcxOCAyNDEgMjY1LjI0MiAyNDAuNTggMjY1LjI0MiAyMzkuNzRWMjM3LjIyQzI2NS4yNDIgMjM2LjM4IDI2NS42NjIgMjM1Ljk2IDI2Ni41MDIgMjM1Ljk2SDI2Ni42N0MyNjguNzQyIDIzNS45NiAyNzAuMjU0IDIzNS4yMDQgMjcxLjIwNiAyMzMuNjkyQzI3Mi4yMTQgMjMyLjEyNCAyNzIuNzE4IDIzMC4yMiAyNzIuNzE4IDIyNy45OFYyMTkuMDc2QzI3Mi43MTggMjE3Ljc4OCAyNzIuNjA2IDIxNi41IDI3Mi4zODIgMjE1LjIxMkMyNzIuMjE0IDIxMy45MjQgMjcxLjc5NCAyMTIuODA0IDI3MS4xMjIgMjExLjg1MkMyNzAuNDUgMjEwLjkgMjY5LjMzIDIxMC4zNCAyNjcuNzYyIDIxMC4xNzJDMjY3LjA5IDIxMC4xMTYgMjY2Ljc1NCAyMDkuNzUyIDI2Ni43NTQgMjA5LjA4VjIwNi4yMjRDMjY2Ljc1NCAyMDUuODg4IDI2Ni44NjYgMjA1LjY2NCAyNjcuMDkgMjA1LjU1MkMyNjcuMzE0IDIwNS4zODQgMjY3LjYyMiAyMDUuMjQ0IDI2OC4wMTQgMjA1LjEzMkMyNzIuNDM4IDIwMy42NzYgMjc1LjgyNiAyMDIuMTkyIDI3OC4xNzggMjAwLjY4QzI4MC41ODYgMTk5LjExMiAyODIuMzUgMTk3Ljc0IDI4My40NyAxOTYuNTY0QzI4My41ODIgMTk2LjQ1MiAyODMuNjk0IDE5Ni4zOTYgMjgzLjgwNiAxOTYuMzk2SDI4NC4wNThDMjg0LjE3IDE5Ni4zOTYgMjg0LjIyNiAxOTYuNDUyIDI4NC4yMjYgMTk2LjU2NFYyMjcuODk2QzI4NC4yMjYgMjMwLjEzNiAyODQuNzMgMjMyLjA0IDI4NS43MzggMjMzLjYwOEMyODYuNzQ2IDIzNS4xNzYgMjg4LjI4NiAyMzUuOTYgMjkwLjM1OCAyMzUuOTZIMjkwLjYxWk0yNzguNTk4IDE3OC44NEMyODAuMDU0IDE3OC44NCAyODEuNDgyIDE3OS41NCAyODIuODgyIDE4MC45NEMyODQuMjgyIDE4Mi4zNCAyODQuOTgyIDE4My43NCAyODQuOTgyIDE4NS4xNEMyODQuOTgyIDE4Ni41NCAyODQuMjgyIDE4Ny45NCAyODIuODgyIDE4OS4zNEMyODEuNDgyIDE5MC43NCAyODAuMDU0IDE5MS40NCAyNzguNTk4IDE5MS40NEMyNzcuMjU0IDE5MS40NCAyNzUuODU0IDE5MC43NCAyNzQuMzk4IDE4OS4zNEMyNzIuOTk4IDE4Ny45OTYgMjcyLjI5OCAxODYuNTk2IDI3Mi4yOTggMTg1LjE0QzI3Mi4yOTggMTgzLjc0IDI3Mi45OTggMTgyLjM0IDI3NC4zOTggMTgwLjk0QzI3NS43OTggMTc5LjU0IDI3Ny4xOTggMTc4Ljg0IDI3OC41OTggMTc4Ljg0WiIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzFfMTgiIHgxPSItMTYiIHkxPSIyMSIgeDI9IjE5NCIgeTI9IjIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxQjQ5ODciPjwvc3RvcD4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMkY4MEVEIj48L3N0b3A+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8xXzE4IiB4MT0iMCIgeTE9Ijc5IiB4Mj0iMjEwIiB5Mj0iNzkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzFCNDk4NyI+PC9zdG9wPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyRjgwRUQiPjwvc3RvcD4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzFfMTgiIHgxPSIzMiIgeTE9IjEzNyIgeDI9IjI0MiIgeTI9IjEzNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMzI3NjhDIj48L3N0b3A+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzU2Q0NGMiI+PC9zdG9wPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPg==';

  function NavRail({ current, go }) {
    return (
      <nav style={{
        width: 248, flexShrink: 0, background: 'var(--gradient-navy)',
        height: '100vh', position: 'sticky', top: 0, display: 'flex', flexDirection: 'column',
        borderRight: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div style={{ padding: '22px 22px 18px' }}>
          <img src={LOGO} alt="Zavari" style={{ height: 26, display: 'block' }} />
        </div>
        <div style={{ padding: '4px 14px', overflowY: 'auto', flex: 1 }}>
          {GROUPS.map(g => (
            <div key={g.group} style={{ marginBottom: 22 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', color: 'rgba(224,230,237,0.45)', textTransform: 'uppercase', padding: '0 10px 8px' }}>{g.group}</div>
              {g.items.map(it => {
                const active = current === it.id;
                return (
                  <button key={it.id} onClick={() => go(it.id)} style={{
                    width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 11,
                    padding: '9px 10px', marginBottom: 2, borderRadius: 5, cursor: 'pointer',
                    border: 'none', position: 'relative',
                    background: active ? 'rgba(0,212,255,0.10)' : 'transparent',
                    color: active ? '#FFFFFF' : 'rgba(224,230,237,0.78)',
                    fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: active ? 600 : 400,
                    transition: 'background 160ms, color 160ms',
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}>
                    {active && <span style={{ position: 'absolute', left: 0, top: 7, bottom: 7, width: 3, borderRadius: 3, background: 'var(--zv-cyan)' }} />}
                    <span style={{ color: active ? 'var(--zv-cyan)' : 'rgba(224,230,237,0.55)', display: 'flex' }}><Icon name={it.icon} size={18} /></span>
                    <span style={{ flex: 1 }}>{it.label}</span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
        <div style={{ padding: '14px 22px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, flexShrink: 0 }}>{window.ZV.tenant.user.name.split(' ').map(w => w[0]).join('')}</div>
          <div style={{ lineHeight: 1.25, overflow: 'hidden' }}>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{window.ZV.tenant.user.name}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(224,230,237,0.5)' }}>{window.ZV.tenant.user.role}</div>
          </div>
        </div>
      </nav>
    );
  }

  function Segmented({ options, value, onChange }) {
    return (
      <div style={{ display: 'inline-flex', background: 'var(--zv-cool-gray-soft)', border: '1px solid var(--color-border)', borderRadius: 6, padding: 3, gap: 2 }}>
        {options.map(o => {
          const active = value === o.k;
          return (
            <button key={o.k} onClick={() => onChange(o.k)} style={{
              fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12.5, padding: '5px 13px',
              border: 'none', borderRadius: 4, cursor: 'pointer',
              background: active ? 'var(--color-surface)' : 'transparent',
              color: active ? 'var(--color-heading)' : 'var(--color-secondary)',
              boxShadow: active ? 'var(--shadow-card)' : 'none', transition: 'all 140ms',
            }}>{o.l}</button>
          );
        })}
      </div>
    );
  }

  function TopBar({ screen, variant, setVariant }) {
    return (
      <div style={{
        position: 'sticky', top: 0, zIndex: 20, height: 60, flexShrink: 0,
        background: 'rgba(246,245,241,0.85)', backdropFilter: 'saturate(180%) blur(8px)',
        borderBottom: '1px solid var(--color-border)',
        display: 'flex', alignItems: 'center', gap: 18, padding: '0 36px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 22, height: 22, borderRadius: 5, background: 'var(--zv-navy)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 13 }}>H</div>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14, color: 'var(--color-heading)' }}>{window.ZV.tenant.name}</div>
          </div>
          <Mono style={{ fontSize: 11, color: 'var(--color-secondary)', borderLeft: '1px solid var(--color-border)', paddingLeft: 10, marginLeft: 2 }}>{window.ZV.tenant.descriptor}</Mono>
        </div>
        <div style={{ flex: 1 }} />
        {screen.variants && <Segmented options={screen.variants} value={variant} onChange={setVariant} />}
        <button style={{
          display: 'flex', alignItems: 'center', gap: 8, padding: '8px 14px', borderRadius: 999,
          border: '1px solid var(--color-border)', background: 'var(--color-surface)', cursor: 'pointer',
          fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--color-heading)', fontWeight: 500,
        }}>
          <span style={{ color: 'var(--zv-azure)', display: 'flex' }}><Icon name="spark" size={15} /></span>
          Ask Zavari
        </button>
      </div>
    );
  }

  function Pager({ current, go }) {
    const i = NARRATIVE.indexOf(current);
    const prev = i > 0 ? NARRATIVE[i - 1] : null;
    const next = i < NARRATIVE.length - 1 ? NARRATIVE[i + 1] : null;
    const btn = (id, dir) => {
      const s = byId(id);
      return (
        <button onClick={() => go(id)} style={{
          display: 'flex', alignItems: 'center', gap: 9, padding: '9px 15px', borderRadius: 8,
          border: '1px solid var(--color-border)', background: 'var(--color-surface)', cursor: 'pointer',
          boxShadow: 'var(--shadow-card)', fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--color-heading)',
          fontWeight: 500, flexDirection: dir === 'prev' ? 'row' : 'row-reverse',
        }}>
          <span style={{ color: 'var(--color-secondary)', display: 'flex', transform: dir === 'prev' ? 'scaleX(-1)' : 'none' }}><Icon name="arrow" size={15} /></span>
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: dir === 'prev' ? 'flex-start' : 'flex-end', lineHeight: 1.2 }}>
            <Mono style={{ fontSize: 10, color: 'var(--color-secondary)', letterSpacing: '0.05em' }}>{dir === 'prev' ? 'BACK' : 'NEXT'}</Mono>
            <span>{s.label}</span>
          </span>
        </button>
      );
    };
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, marginTop: 44, paddingTop: 24, borderTop: '1px solid var(--color-border)' }}>
        <div>{prev && btn(prev, 'prev')}</div>
        <Mono style={{ fontSize: 11, color: 'var(--color-secondary)' }}>{String(i + 1).padStart(2, '0')} / {String(NARRATIVE.length).padStart(2, '0')}</Mono>
        <div>{next && btn(next, 'next')}</div>
      </div>
    );
  }

  function App() {
    const initial = (location.hash || '').replace('#', '');
    const [current, setCurrent] = React.useState(FLAT.find(s => s.id === initial) ? initial : 'command');
    const [variants, setVariants] = React.useState(() => {
      try { return JSON.parse(localStorage.getItem('zv-concepts-variants') || '{}'); } catch (e) { return {}; }
    });
    const scrollRef = React.useRef(null);

    const go = (id) => { setCurrent(id); location.hash = id; if (scrollRef.current) scrollRef.current.scrollTop = 0; };
    React.useEffect(() => {
      const onHash = () => { const h = location.hash.replace('#', ''); if (byId(h)) setCurrent(h); };
      window.addEventListener('hashchange', onHash); return () => window.removeEventListener('hashchange', onHash);
    }, []);
    React.useEffect(() => { localStorage.setItem('zv-concepts-variants', JSON.stringify(variants)); }, [variants]);

    const screen = byId(current);
    const variant = variants[current] || (screen.variants ? screen.variants[0].k : null);
    const setVariant = (k) => setVariants(v => ({ ...v, [current]: k }));
    const Comp = screen.comp();

    return (
      <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <NavRail current={current} go={go} />
        <div ref={scrollRef} style={{ flex: 1, height: '100vh', overflowY: 'auto', minWidth: 0 }}>
          <TopBar screen={screen} variant={variant} setVariant={setVariant} />
          <main style={{ padding: '36px 36px 28px', maxWidth: 1240, margin: '0 auto' }}>
            {Comp ? <Comp variant={variant} go={go} /> : (
              <div style={{ padding: 80, textAlign: 'center', color: 'var(--color-secondary)', fontFamily: 'var(--font-mono)' }}>Loading {screen.label}…</div>
            )}
            <Pager current={current} go={go} />
          </main>
        </div>
      </div>
    );
  }

  window.ZVApp = App;
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
})();

const STORAGE_KEY = 'money-maps-store-v1';

const defaultState = () => ({
  budgets: {
    'food-dining': {
      name: 'Food & Dining',
      color: 'red-500',
      subs: {
        'dining-out': { name: 'Dining Out', total: 250, color: 'red-500' },
        groceries: { name: 'Groceries', total: 500, color: 'green-500' }
      }
    },
    transportation: {
      name: 'Transportation',
      color: 'yellow-500',
      subs: {
        fuel: { name: 'Fuel', total: 150, color: 'yellow-500' }
      }
    },
    shopping: {
      name: 'Shopping',
      color: 'purple-500',
      subs: {
        'general-merch': { name: 'General Merchandise', total: 200, color: 'purple-500' }
      }
    },
    entertainment: {
      name: 'Entertainment',
      color: 'pink-500',
      subs: {
        'movies-events': { name: 'Movies & Events', total: 150, color: 'pink-500' }
      }
    },
    utilities: {
      name: 'Utilities',
      color: 'amber-500',
      subs: {
        electric: { name: 'Electric & Energy', total: 200, color: 'amber-500' }
      }
    },
    health: {
      name: 'Health',
      color: 'teal-500',
      subs: {
        'pharmacy-medical': { name: 'Pharmacy & Medical', total: 100, color: 'teal-500' }
      }
    },
    fitness: {
      name: 'Fitness',
      color: 'emerald-500',
      subs: {
        'gym-membership': { name: 'Gym Memberships', total: 50, color: 'emerald-500' }
      }
    },
    home: {
      name: 'Home',
      color: 'cyan-500',
      subs: {
        'home-improvement': { name: 'Home Improvement', total: 250, color: 'cyan-500' }
      }
    },
    income: {
      name: 'Income',
      color: 'green-600',
      subs: {
        'primary-income': { name: 'Primary Income', total: 0, color: 'green-600' }
      }
    },
    transfers: {
      name: 'Transfers',
      color: 'gray-500',
      subs: {
        internal: { name: 'Internal Transfers', total: 0, color: 'gray-500' }
      }
    }
  },
  transactions: [
    { id: 1, name: 'Axis Energy', amount: 2145.67, type: 'credit', date: '2025-10-10', category: { parentKey: 'income', subKey: 'primary-income' }, source: 'Bank Sync (Payroll)', isInternalTransfer: false },
    { id: 100, name: 'Check Deposit', amount: 150.0, type: 'credit', date: '2025-10-01', category: { parentKey: 'income', subKey: 'primary-income' }, source: 'Check #8812', isInternalTransfer: false },
    { id: 2, name: 'Whole Foods Market', amount: 142.33, type: 'debit', date: '2025-10-12', category: { parentKey: 'food-dining', subKey: 'groceries' }, source: 'Bank Sync', isInternalTransfer: false },
    { id: 3, name: "Trader Joe's", amount: 98.22, type: 'debit', date: '2025-10-05', category: { parentKey: 'food-dining', subKey: 'groceries' }, source: 'Bank Sync', isInternalTransfer: false },
    { id: 4, name: 'Whole Foods Market', amount: 70.0, type: 'debit', date: '2025-10-01', category: { parentKey: 'food-dining', subKey: 'groceries' }, source: 'Bank Sync', isInternalTransfer: false },
    { id: 5, name: 'The Flying Squirrel', amount: 78.5, type: 'debit', date: '2025-10-11', category: { parentKey: 'food-dining', subKey: 'dining-out' }, source: 'Bank Sync', isInternalTransfer: false },
    { id: 6, name: "Rembrandt's Coffee House", amount: 18.75, type: 'debit', date: new Date().toISOString().split('T')[0], category: { parentKey: 'food-dining', subKey: 'dining-out' }, source: 'Manual Log', isInternalTransfer: false },
    { id: 7, name: 'Public House Restaurant', amount: 67.25, type: 'debit', date: '2025-10-08', category: { parentKey: 'food-dining', subKey: 'dining-out' }, source: 'Bank Sync', isInternalTransfer: false },
    { id: 8, name: 'Shell', amount: 48.12, type: 'debit', date: '2025-10-09', category: { parentKey: 'transportation', subKey: 'fuel' }, source: 'Bank Sync', isInternalTransfer: false },
    { id: 9, name: 'Shell', amount: 46.78, type: 'debit', date: '2025-10-02', category: { parentKey: 'transportation', subKey: 'fuel' }, source: 'Bank Sync', isInternalTransfer: false },
    { id: 10, name: 'Target', amount: 80.0, type: 'debit', date: '2025-10-04', category: { parentKey: 'shopping', subKey: 'general-merch' }, source: 'Bank Sync', isInternalTransfer: false },
    { id: 11, name: 'Target Refund', amount: 24.5, type: 'credit', date: '2025-10-06', category: { parentKey: 'shopping', subKey: 'general-merch' }, source: 'Bank Sync', isInternalTransfer: false },
    { id: 12, name: 'Regal Hamilton Place', amount: 75.0, type: 'debit', date: '2025-10-05', category: { parentKey: 'entertainment', subKey: 'movies-events' }, source: 'Bank Sync', isInternalTransfer: false },
    { id: 13, name: 'EPB Headquarters', amount: 20.0, type: 'debit', date: '2025-10-08', category: { parentKey: 'utilities', subKey: 'electric' }, source: 'Check #2045', isInternalTransfer: false },
    { id: 14, name: 'CVS', amount: 35.0, type: 'debit', date: '2025-10-07', category: { parentKey: 'health', subKey: 'pharmacy-medical' }, source: 'Bank Sync', isInternalTransfer: false },
    { id: 15, name: 'Erlanger Baroness Hospital', amount: 20.0, type: 'debit', date: '2025-10-03', category: { parentKey: 'health', subKey: 'pharmacy-medical' }, source: 'Bank Sync', isInternalTransfer: false },
    { id: 16, name: 'Orangetheory Fitness', amount: 15.0, type: 'debit', date: '2025-10-01', category: { parentKey: 'fitness', subKey: 'gym-membership' }, source: 'Bank Sync', isInternalTransfer: false },
    { id: 17, name: 'The Home Depot', amount: 100.0, type: 'debit', date: '2025-09-30', category: { parentKey: 'home', subKey: 'home-improvement' }, source: 'Bank Sync', isInternalTransfer: false },
    { id: 18, name: 'Transfer to Savings', amount: 500.0, type: 'debit', date: '2025-10-10', category: { parentKey: 'transfers', subKey: 'internal' }, source: 'Checking', isInternalTransfer: true },
    { id: 19, name: 'Transfer from Checking', amount: 500.0, type: 'credit', date: '2025-10-10', category: { parentKey: 'transfers', subKey: 'internal' }, source: 'Savings', isInternalTransfer: true }
  ],
  accounts: [],
  placeAssignments: {},
  goals: {
    'emergency-fund': { name: 'Emergency Fund', current: 750.0, total: 3000.0, color: 'blue-500' },
    vacation: { name: 'Vacation', current: 250.0, total: 1500.0, color: 'cyan-500' }
  },
  savings: {
    'cash-reserve': { name: 'Cash Reserve', current: 1200.0, total: 10000.0, color: 'lime-500' }
  }
});

const listeners = new Set();
let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const defaults = defaultState();
      persist(defaults);
      return defaults;
    }
    const parsed = JSON.parse(raw);
    return mergeWithDefaults(parsed, defaultState());
  } catch (error) {
    console.warn('Unable to load store, falling back to defaults', error);
    const defaults = defaultState();
    persist(defaults);
    return defaults;
  }
}

function persist(nextState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextState));
  } catch (error) {
    console.warn('Unable to persist store', error);
  }
}

function mergeWithDefaults(saved, defaults) {
  const merged = { ...defaults, ...saved };
  merged.budgets = mergeNested(defaults.budgets, saved?.budgets);
  merged.goals = { ...defaults.goals, ...(saved?.goals || {}) };
  merged.savings = { ...defaults.savings, ...(saved?.savings || {}) };
  merged.transactions = saved?.transactions || defaults.transactions;
  merged.accounts = saved?.accounts || defaults.accounts;
  merged.placeAssignments = saved?.placeAssignments || defaults.placeAssignments;
  return merged;
}

function mergeNested(defaults, saved) {
  if (!saved) return structuredClone(defaults);
  const result = {};
  for (const [parentKey, parentDefault] of Object.entries(defaults)) {
    const savedParent = saved[parentKey];
    if (!savedParent) {
      result[parentKey] = structuredClone(parentDefault);
      continue;
    }
    result[parentKey] = {
      ...parentDefault,
      ...savedParent,
      subs: {
        ...parentDefault.subs,
        ...(savedParent.subs || {})
      }
    };
  }
  for (const [parentKey, parentSaved] of Object.entries(saved)) {
    if (!result[parentKey]) {
      result[parentKey] = structuredClone(parentSaved);
    }
  }
  return result;
}

function structuredClone(value) {
  return globalThis.structuredClone
    ? globalThis.structuredClone(value)
    : JSON.parse(JSON.stringify(value));
}

function recalcParentTotals(nextState) {
  for (const parent of Object.values(nextState.budgets)) {
    const total = Object.values(parent.subs || {}).reduce((sum, sub) => sum + (Number(sub.total) || 0), 0);
    parent.total = total;
  }
}

function updateState(updater) {
  const draft = structuredClone(state);
  const result = updater(draft) || draft;
  recalcParentTotals(result);
  state = result;
  persist(state);
  listeners.forEach((listener) => listener(getState()));
  return state;
}

function getState() {
  return structuredClone(state);
}

function subscribe(listener) {
  listeners.add(listener);
  listener(getState());
  return () => listeners.delete(listener);
}

function slugify(label) {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const actions = {
  addParentCategory({ name, color, key }) {
    return updateState((draft) => {
      const parentKey = key || slugify(name);
      if (draft.budgets[parentKey]) {
        throw new Error(`Parent category "${parentKey}" already exists.`);
      }
      draft.budgets[parentKey] = { name, color, subs: {} };
      return draft;
    });
  },
  addSubCategory(parentKey, { name, total, color, key }) {
    if (!parentKey) throw new Error('Parent key is required');
    return updateState((draft) => {
      const parent = draft.budgets[parentKey];
      if (!parent) throw new Error(`Parent category "${parentKey}" not found.`);
      const subKey = key || slugify(name);
      if (parent.subs[subKey]) {
        throw new Error(`Sub-category "${subKey}" already exists under ${parentKey}.`);
      }
      parent.subs[subKey] = { name, total: Number(total) || 0, color: color || parent.color };
      return draft;
    });
  },
  updateSubCategory(parentKey, subKey, updates) {
    return updateState((draft) => {
      const parent = draft.budgets[parentKey];
      if (!parent || !parent.subs[subKey]) return draft;
      parent.subs[subKey] = { ...parent.subs[subKey], ...updates };
      return draft;
    });
  },
  removeSubCategory(parentKey, subKey) {
    return updateState((draft) => {
      const parent = draft.budgets[parentKey];
      if (!parent || !parent.subs[subKey]) return draft;
      delete parent.subs[subKey];
      return draft;
    });
  },
  assignPlaceToSub(placeId, parentKey, subKey) {
    if (!placeId) throw new Error('placeId is required');
    return updateState((draft) => {
      if (parentKey && subKey) {
        draft.placeAssignments[placeId] = { parentKey, subKey };
      } else {
        delete draft.placeAssignments[placeId];
      }
      return draft;
    });
  },
  ingestTransactions(transactions, { replace = false } = {}) {
    return updateState((draft) => {
      if (replace) {
        draft.transactions = transactions.map((t) => ({ ...t }));
      } else {
        draft.transactions.push(...transactions.map((t) => ({ ...t })));
      }
      return draft;
    });
  },
  setAccounts(accounts) {
    return updateState((draft) => {
      draft.accounts = accounts.map((a) => ({ ...a }));
      return draft;
    });
  },
  reset(initialState = defaultState()) {
    state = structuredClone(initialState);
    recalcParentTotals(state);
    persist(state);
    listeners.forEach((listener) => listener(getState()));
    return state;
  }
};

recalcParentTotals(state);

export const store = {
  getState,
  subscribe,
  actions
};

export function getParentCategory(parentKey) {
  const current = store.getState();
  return current.budgets[parentKey] || null;
}

export function getSubCategory(parentKey, subKey) {
  const parent = getParentCategory(parentKey);
  if (!parent) return null;
  return parent.subs?.[subKey] || null;
}

export function getPlaceAssignment(placeId) {
  const current = store.getState();
  return current.placeAssignments?.[placeId] || null;
}

export function getBudgetSummaries() {
  const current = store.getState();
  const spendMap = new Map();

  for (const tx of current.transactions) {
    const category = tx.category;
    if (!category || !category.parentKey || !category.subKey) continue;
    if (tx.isInternalTransfer) continue;
    const key = `${category.parentKey}:${category.subKey}`;
    const currentSpent = spendMap.get(key) || 0;
    if (tx.type === 'debit') {
      spendMap.set(key, currentSpent + Number(tx.amount || 0));
    } else if (tx.type === 'credit') {
      spendMap.set(key, currentSpent - Number(tx.amount || 0));
    }
  }

  const summary = {};

  for (const [parentKey, parent] of Object.entries(current.budgets)) {
    const subs = Object.entries(parent.subs || {}).map(([subKey, sub]) => {
      const spent = spendMap.get(`${parentKey}:${subKey}`) || 0;
      const remaining = Number(sub.total || 0) - spent;
      return {
        key: subKey,
        name: sub.name,
        total: Number(sub.total || 0),
        color: sub.color || parent.color,
        spent,
        remaining
      };
    });

    const total = subs.reduce((acc, item) => acc + item.total, 0);
    const spent = subs.reduce((acc, item) => acc + item.spent, 0);
    const remaining = subs.reduce((acc, item) => acc + item.remaining, 0);

    summary[parentKey] = {
      key: parentKey,
      name: parent.name,
      color: parent.color,
      total,
      spent,
      remaining,
      subs
    };
  }

  return summary;
}

export function getTransactions() {
  const current = store.getState();
  return current.transactions.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getGoals() {
  return store.getState().goals;
}

export function getSavings() {
  return store.getState().savings;
}

export function getAccounts() {
  return store.getState().accounts;
}

export function getPlaceAssignments() {
  return store.getState().placeAssignments;
}

import { InMemoryLiveQueryStore } from '@n1ru4l/in-memory-live-query-store';

let InMemoryStore: InMemoryLiveQueryStore;

export const GetInMemoryStore = () => {
  if (InMemoryStore != null) {
    return InMemoryStore;
  }
  InMemoryStore = new InMemoryLiveQueryStore();
  return InMemoryStore;
};

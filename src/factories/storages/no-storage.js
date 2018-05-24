/* eslint-disable */
class NoStorageFactory {
  // no-op
  set(key, value) {} 

  // Always returns null;
  get(key) {
    return null
  }

  // no-op
  delete(key) {}
}

export default NoStorageFactory

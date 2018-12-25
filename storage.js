export const storageGet = async(key) => {
    try {
         const result = await AsyncStorage.getItem(key);
         return result;
      } catch(error) {
      }
}
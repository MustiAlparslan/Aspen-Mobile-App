import create from 'zustand';

// StoreState interface'i ile state'i ve fonksiyonları tanımlayın
interface StoreState {
  recommends: any[]; // Array olarak tutulan veriler
  GET_RECOMMENDS: () => Promise<void>; // Async fonksiyon
}

// Zustand store'u oluşturun
const useStore = create<StoreState>((set) => ({
  recommends: [], // Başlangıçta boş bir array
  GET_RECOMMENDS: async () => {
    try {
      const response = await fetch('http://localhost:3000/api/recommends'); // API'yi çağırın
      const data = await response.json();
      set({ recommends: data }); // Gelen veriyi store'a yerleştirin
    } catch (error) {
      console.error('Veri alınırken hata oluştu:', error);
    }
  }
}));

export default useStore;

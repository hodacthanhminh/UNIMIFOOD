import * as actionType from '../actions/type';

const initialState = {
  isLoadingStore: true,
  isLoadingMenus: true,
  isLoadingOrder: true,
  isError: false,
  storeInfo: {},
  storeMenus: {},
  storeOrder: [],
};

const storecontrol = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.STORE_CONTROL_UPDATE_STORE:
    case actionType.STORE_CONTROL_LOAD_STORE:
      return {
        ...state,
        isError: false,
        isLoadingStore: true,
      };
    case actionType.STORE_CONTROL_CREATE_MENU:
    case actionType.STORE_CONTROL_LOAD_MENU:
      return {
        ...state,
        isError: false,
        isLoadingMenus: true,
      };
    case actionType.STORE_CONTROL_LOAD_ORDER:
      return {
        ...state,
        isError: false,
        isLoadingOrder: true,
      };
    case actionType.STORE_CONTROL_LOAD_STORE_SUCCESS:
      return {
        ...state,
        isLoadingStore: false,
        isLoadingMenus: false,
        isError: false,
        storeInfo: payload.store,
        storeMenus: payload.store.menus,
      };
    case actionType.STORE_CONTROL_LOAD_ORDER_SUCCESS:
      return {
        ...state,
        isLoadingOrder: false,
        isError: false,
        storeOrder: payload.orders,
      };
    case actionType.STORE_CONTROL_UPDATE_STORE_SUCCESS:
      return {
        ...state,
        isLoadingStore: false,
        isError: false,
        storeInfo: payload.store,
      };
    case actionType.STORE_CONTROL_CREATE_MENU_SUCCESS: {
      const newMenu = [...state.storeMenus, payload.menu];
      return {
        ...state,
        storeMenus: newMenu,
        isLoadingMenus: false,
        isError: false,
      };
    }
    case actionType.STORE_CONTROL_UPDATE_MENU_SUCCESS: {
      const updateMenu = payload.menu;
      const newStoreMenu = state.storeMenus.map((menu) => {
        let newMenu;
        if (menu.id === updateMenu.id) {
          newMenu = { ...updateMenu };
        } else newMenu = { ...menu };
        return newMenu;
      });
      return {
        ...state,
        storeMenus: newStoreMenu,
      };
    }
    case actionType.STORE_CONTROL_UPDATE_ITEM_SUCCESS: {
      const updateItem = payload.item;
      const newStoreMenu = state.storeMenus.map((menu) => {
        let newMenu;
        if (menu.id === updateItem.menu) {
          const newMenuItems = menu.items.map((item) => {
            let newItem;
            if (item.id === updateItem.id) {
              newItem = { ...updateItem };
            } else newItem = { ...item };
            return newItem;
          });
          newMenu = {
            ...menu,
            items: newMenuItems,
          };
        } else newMenu = { ...menu };
        return newMenu;
      });
      return {
        ...state,
        storeMenus: newStoreMenu,
      };
    }
    case actionType.STORE_CONTROL_UPDATE_ITEM_FAILED:
    case actionType.STORE_CONTROL_UPDATE_STORE_FAILED:
    case actionType.STORE_CONTROL_CREATE_MENU_FAILED:
    case actionType.STORE_CONTROL_UPDATE_MENU_FAILED:
      return {
        ...state,
      };
    case actionType.STORE_CONTROL_LOAD_MENU_FAILED:
    case actionType.STORE_CONTROL_LOAD_ORDER_FAILED:
    case actionType.STORE_CONTROL_LOAD_STORE_FAILED:
      return {
        ...state,
        isError: true,
        storeInfo: {},
        storeMenus: {},
        storeOrder: [],
      };
    case actionType.STORE_CONTROLL_CLEAR_ALL:
      return {
        isLoadingStore: true,
        isLoadingMenus: true,
        isLoadingOrder: true,
        isError: false,
        storeInfo: {},
        storeMenus: {},
        storeOrder: [],
      };
    default:
      return { ...state };
  }
};

export default storecontrol;

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './src/Pages/MyDrower';
import CommonContext from './src/Context/Index';
import { configurationName } from './src/values/configuration';
import { deletePost, insertInto, select, updateData } from './src/DB/MenegmentDB';
import { useState } from 'react';


// Такс Димычь , заранее спасибо тебе за твою помощь ;) 
// Постарался вынести сюда все монипуляции с баззой данных и ключевые функции управления состоянием приложения  

export default function App() {
  const [modal, setModal] = useState([]); // Использование этого состояния ты найдешь в папке Components файл ModalActionOfPlace.js 
  // использую его для того что бы создать, сохранить и отправить данные в ДБ о новом месте .

  const [libraryItems, setLibraryItems] = useState([]); // Использование этого состояния ты найдешь в папке Pages файл Library.js
  // использую его для того что бы достать с ДБ список мест если он есть и отобразить в приложении .

  const [isDeletePlace, setIsDeletePlase] = useState({ answer: false, id: null }); // Использование этого состояния ты найдешь в папке Components файл ModalOfQuestion
  // использую его для того что бы удалить из ДБ желаемое место .  

  const [isSearch, setIsSearch] = useState(false); // Использование этого состояния ты найдешь в папке Components файл Header.js 
  // там есть тогл который сробатывает при нажатии для отображения панели поиска , в папке Pages файл Library.js происходит отоьражение поисковой строки .

  const [updatedPlase, setUpdatedPlace] = useState([]); // Использование этого состояния ты найдешь в папке UI файл ItemOfPLace.js 
  // использую его для внесения изменений в уже сосзданное место . На данный момент эта возможность не реализована польностю .

  // Все методы работы с SQLite ты найдешь в папке DB

  async function fetchData() {
    try {
      const data = await select(configurationName.dbName);
      setLibraryItems(data)
    } catch (error) {
      console.error(error);
    }
  }

  async function addItem() {
    try {
      await insertInto(configurationName.dbName, modal.uniqueId, modal.values.newCategory, modal.values.name, modal.values.description)
      await fetchData()
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteItem() {
    try {
      await deletePost(configurationName.dbName, isDeletePlace.id)
      await fetchData()
    } catch (error) {
      console.error(error);
    }
  }

  async function updateItem() {
    try {
      await updateData(configurationName.dbName, updatedPlase.uniqueId, 
      updatedPlase.values.newCategory , updatedPlase.values.name, updatedPlase.values.description)
      await fetchData()
    } catch (error) {
      console.error(error);
    }
  }


  React.useEffect(() => {
    if (libraryItems.length == 0) {
      fetchData()
    } else {
      console.log('Already done')
    }
  }, [])

  // Процессы связанные с обновлением данных   

  React.useEffect(() => {
    if (isDeletePlace.answer) {
      deleteItem()
      setIsDeletePlase({ answer: false })
    } else if (modal.values.newCategory) {
      addItem()
      setModal([])
    } else if (updatedPlase.values.newCategory) {
      updateItem()
      setUpdatedPlace([])
    } else {
      console.log('Nothing was changing!')
    }
  }, [isDeletePlace, modal, updatedPlase])


  return (
    <CommonContext.Provider value={{
      modal,
      setModal,
      libraryItems,
      setLibraryItems,
      setIsDeletePlase,
      isSearch,
      setIsSearch,
      updatedPlase,
      setUpdatedPlace,
    }} >
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </CommonContext.Provider>
  );
}



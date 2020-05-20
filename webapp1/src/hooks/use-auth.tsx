import React, { useState, useEffect, useContext, createContext } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { toaster } from 'baseui/toast'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyA1ox5XtZOLrE6HpNc3D1cnHJ3MYoiY5cM',
    authDomain: 'h-auth2020.firebaseapp.com',
    databaseURL: 'https://h-auth2020.firebaseio.com',
    projectId: 'h-auth2020',
    storageBucket: 'h-auth2020.appspot.com',
    messagingSenderId: '744171441145',
    appId: '1:744171441145:web:be8a506fd180b9d3f10b28',
    measurementId: 'G-YNKCHEWG09',
  })
}
export const fbase = firebase
export const db = firebase.firestore()

const authContext: any = createContext({})

export function ProvideAuth({ children }: any) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth() {
  const [state, setState] = useState({
    initializing: true,
    user: null,
    customClaims: null,
  })

  async function onChange(user: any) {
    if (user) {
      const tokenResult: any = await firebase
        .auth()
        .currentUser!.getIdTokenResult()

      setState({ initializing: false, user, customClaims: tokenResult })
    } else {
      setState({
        ...state,
        initializing: false,
        user: null,
        customClaims: null,
      })
    }
  }

  const signin = async (email: string, password: string) => {
    try {
      const v = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)

      toaster.positive(`Auth with ${v.user!.email}`, {
        autoHideDuration: 5000,
      })
    } catch (error) {
      toaster.warning(error.message, {
        autoHideDuration: 5000,
      })
    }
  }

  const signout = () => {
    return firebase.auth().signOut()
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange)
    return () => unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    state,
    signin,
    signout,
  }
}

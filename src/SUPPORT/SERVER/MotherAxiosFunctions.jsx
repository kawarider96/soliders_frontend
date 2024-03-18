import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_API_URL } from '../DATA/config';

export default function MotherAxiosFunctions() {

    const GetRequest = async (action) => {
      const token = localStorage.getItem('token'); 
      return axios.get(BASE_API_URL + action, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        return response; 
      })
      .catch(error => {
        throw error; // Dobunk egy hibát, hogy azt kezelni lehessen a hívó kódban
      });
    }

    const PostRequest = async (action, data) => {
        const token = localStorage.getItem('token'); 
        return axios.post(BASE_API_URL + action, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          return response.data; // Visszaadjuk a válasz tartalmát
        })
        .catch(error => {
          throw error; // Dobunk egy hibát, hogy azt kezelni lehessen a hívó kódban
        });
    };

    const PutRequest = async (action, data) => {
      const token = localStorage.getItem('token'); 
      return axios.put(BASE_API_URL + action, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        return response.data; // Visszaadjuk a válasz tartalmát
      })
      .catch(error => {
        throw error; // Dobunk egy hibát, hogy azt kezelni lehessen a hívó kódban
      });
  };

  const DeleteRequest = async (action, data) => {
    const token = localStorage.getItem('token'); 
    return axios.delete(BASE_API_URL + action, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      return response.data; // Visszaadjuk a válasz tartalmát
    })
    .catch(error => {
      throw error; // Dobunk egy hibát, hogy azt kezelni lehessen a hívó kódban
    });
};

    const LoginRequest = async (action, sztsz, password) => {
        return axios.post(BASE_API_URL + action, {
          sztsz, password
        })
        .then(response => {
          return response; // Visszaadjuk a válasz tartalmát
        })
        .catch(error => {
          throw error; // Dobunk egy hibát, hogy azt kezelni lehessen a hívó kódban
        });
    };


    return {PostRequest, GetRequest, PutRequest, DeleteRequest, LoginRequest }
}
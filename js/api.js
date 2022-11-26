import { showTopGame } from "./main.js";
import { getPlatformList } from "./platform.js";
import { getConquestsList } from "./conquests.js";
import { getDlcList } from "./editions.js";


let dateObj = new Date();
let year = dateObj.getUTCFullYear();
const API_KEY = "d0afbcc558a349d5ac7ffceccbbf32dd";

export async function getInfos() {
    try {
        const request = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}`);
        const response = await request.json();
        showTopGame(response);
        return response;
    } catch (error) {
        throw new Error(error);
    };
};

export async function getNewGames() {
    try {
        const request = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&dates=${year}-07-01,${year}-12-31&ordering=-added`);
        const response = await request.json();
        showTopGame(response);
        return response;
    } catch (error) {
        throw new Error(error);
    };
};
export async function getAllPlatforms() {
    try {
        const request = await fetch(`https://api.rawg.io/api/platforms?key=${API_KEY}`);
        const response = await request.json();
        getPlatformList(response);
        return response;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    };
};

export async function getConquests() {
    try {
        const request = await fetch(` https://api.rawg.io/api/games/4200/achievements?key=${API_KEY}`);
        const response = await request.json();
        getConquestsList(response);
        return response;
    } catch (error) {
        throw new Error(error);
    };
}

export async function getAllDlc() {
    try {
        const request = await fetch(`https://api.rawg.io/api/games/4200/additions?key=${API_KEY}`);
        const response = await request.json();
        getDlcList(response);
        return response;
    } catch (error) {
        throw new Error(error);
    };
}




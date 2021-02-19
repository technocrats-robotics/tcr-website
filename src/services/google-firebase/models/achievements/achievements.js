// Schema & methods for 'achievements' collection

import { db } from "../../setup";


class Achievements {
    static collectionName = 'achievements';


    static async getAllAchievements() {
        return db.collection(Achievements.collectionName)
        .orderBy('date', 'desc')
        .get();
    }
}

export default Achievements;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../model/User';

interface UserState {
    data: User[];
}

const initialState: UserState = {
    data: [],
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            const addUser: User = {
                id: action.payload.id,
                prefix: action.payload.prefix,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                birthday: action.payload.birthday,
                region: action.payload.region,
                citizen: action.payload.citizen,
                gender: action.payload.gender,
                telephone: action.payload.telephone,
                passport: action.payload.passport,
                salary: action.payload.salary,
                nationalId1: action.payload.nationalId1,
                nationalId2: action.payload.nationalId3,
                nationalId3: action.payload.nationalId3,
                nationalId4: action.payload.nationalId4,
                nationalId5: action.payload.nationalId5,
                prefixNum: action.payload.prefixNum
            };
            state.data.push(addUser);
            localStorage.setItem('persons', JSON.stringify(state.data));
        },
        deleteUser: (state, action: PayloadAction<User>) => {
            const id = action.payload;
            localStorage.removeItem('persons');
            localStorage.setItem('persons', JSON.stringify(action.payload));
        },
        deleteAllUser: (state) => {
            state.data = [];
            localStorage.removeItem('persons');
            localStorage.setItem('persons', JSON.stringify([]));
        },
        updateUser: (state, action: PayloadAction<User>) => {
            const editUser: User = {
                id: action.payload.id,
                prefix: action.payload.prefix,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                birthday: action.payload.birthday,
                region: action.payload.region,
                citizen: action.payload.citizen,
                gender: action.payload.gender,
                telephone: action.payload.telephone,
                passport: action.payload.passport,
                salary: action.payload.salary,
                nationalId1: action.payload.nationalId1,
                nationalId2: action.payload.nationalId3,
                nationalId3: action.payload.nationalId3,
                nationalId4: action.payload.nationalId4,
                nationalId5: action.payload.nationalId5,
                prefixNum: action.payload.prefixNum
            };
            state.data.push(editUser);
            localStorage.setItem('persons', JSON.stringify(state.data));
        },
    },
});

export const { addUser, deleteUser, deleteAllUser, updateUser } = userSlice.actions;
export default userSlice.reducer;

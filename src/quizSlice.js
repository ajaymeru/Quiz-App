import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchQuestions = createAsyncThunk(
    'quiz/fetchQuestions',
    async ({ tag }) => {
        const response = await axios.get('https://quizapi.io/api/v1/questions', {
            params: {
                apiKey: 'cH95wfg5w61IvwwlHsyokUwpQ2IsCuRXD1X8K8PL',
                limit: 10,
                tags: tag,
            },
        });
        return response.data;
    }
);

const quizSlice = createSlice({
    name: 'quiz',
    initialState: {
        questions: [],
        currentQuestionIndex: 0,
        score: 0,
        status: 'idle',
        error: null,
    },
    reducers: {
        nextQuestion: (state) => {
            state.currentQuestionIndex++;
        },
        incrementScore: (state) => {
            state.score++;
        },
        resetQuiz: (state) => {
            state.currentQuestionIndex = 0;
            state.score = 0;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuestions.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchQuestions.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.questions = action.payload;
            })
            .addCase(fetchQuestions.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { nextQuestion, incrementScore, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;

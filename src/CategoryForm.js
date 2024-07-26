import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchQuestions } from './quizSlice';

const CategoryForm = () => {
    const [selectedTag, setSelectedTag] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedTag) {
            dispatch(fetchQuestions({ tag: selectedTag }));
        }
    };

    return (
        <div className="form-container">
            <h2>Select a Category</h2>
            <form onSubmit={handleSubmit} className='selectform'>
                <select
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                >
                    <option value="">Select a category</option>
                    <option value="HTML">HTML</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="WordPress">WordPress</option>
                    <option value="BASH">BASH</option>
                    <option value="DevOps">DevOps</option>
                    <option value="Docker">Docker</option>
                    <option value="Kubernetes">Kubernetes</option>
                    <option value="Laravel">Laravel</option>
                    <option value="Linux">Linux</option>
                    <option value="MySQL">MySQL</option>
                    <option value="PHP">PHP</option>
                </select>
                <button type="submit">Start Quiz</button>
            </form>
        </div>
    );
};

export default CategoryForm;

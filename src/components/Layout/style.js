import styled from 'styled-components';

export const Autocomplete = styled.div`
    position: relative;
    display: inline-block;
    input {
        border: 1px solid transparent;
        background-color: #f1f1f1;
        padding: 10px;
        font-size: 16px;
        background-color: #f1f1f1;
        min-width: 400px;
        border-radius: .9rem !important;
        &:focus{
            outline: auto;
        }
    }
      
    .autocomplete-items {
        position: absolute;
        border: 1px solid #d4d4d4;
        border-bottom: none;
        border-top: none;
        z-index: 99;
        top: 100%;
        left: 0;
        right: 0;
        
        div {
            padding: 10px;
            cursor: pointer;
            background-color: #fff;
            border-bottom: 1px solid #d4d4d4;
            &:hover {
                background-color: #e9e9e9;
            }
            .autocomplete-active {
                background-color: DodgerBlue !important;
                color: #ffffff;
            }
        }
    }
  `

  export const Filter = styled.div`
    margin-left: 15px;
    display: inline-block;
    select{
        line-height: 1.25rem !important;
        padding: .6rem .75rem;
        border-radius: .9rem;
        font-size: 16px;
        outline: none;
        background-color: #f1f1f1;
    }
  `
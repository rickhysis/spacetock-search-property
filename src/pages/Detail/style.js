import styled from 'styled-components';

export const Section = styled.div `
    .img-primary{
        width: 100%;
        max-height: 400px;
    }
    .content{
        padding: 20px 15%; 
        &-facilities{
            span{
                font-weight: bold;
            }
            &__detail{
                span{
                    margin-right: 10px;
                }
            }
        }
        &-images{
            margin-top: 150px;
            h5{
                margin-left: 20px;
            }
            &__img{
                height: 250px;
            }
        }
    }
  `
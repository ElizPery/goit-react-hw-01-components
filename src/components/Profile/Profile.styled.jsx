import styled from "styled-components";

export const ContainerProfile = styled.div`
    background-color: #fff;
    border-radius: 12px;
    border: 1px solid rgb(189, 189, 189);
    width: 400px;`;

export const Description = styled.div`
    padding: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    `;

export const Name = styled.p`
    font-weight: 600;
    font-size: 30px;
    margin-top: 40px;
    margin-bottom: 10px`;

export const Tag = styled.p`
    margin-top: 0;
    margin-bottom: 0;
    color: #778899`;

export const Location = styled.p`
    color: #778899`;

export const Stats = styled.ul`
    margin: 0;
    background-color: #F5F5F5;
    border-top: 1px solid rgb(189, 189, 189);
    border-radius: 12px;
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    width: 100px`;

export const Label = styled.span`
    color: #778899`;

export const Quantity = styled.span`
    padding-top: 5px;
    font-weight: 800;
    font-size: 20px;`;

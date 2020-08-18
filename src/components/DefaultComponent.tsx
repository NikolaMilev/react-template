import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import '../styles/DefaultComponent.css';
import { RootState } from '../redux/reducers';
import { bindActionCreators } from 'redux';
import { emailLogin } from '../redux/actions/auth';
import { AppDispatch } from '../redux';

type DefaultComponentOwnProps = {};

const mapStateToProps = (state: RootState, ownProps: DefaultComponentOwnProps) => {
    const currentToken = state.AuthReducer.user && state.AuthReducer.user.token;

    return {
        currentToken
    };
};

const mapDispatchToProps = (dispatch: AppDispatch) =>
    bindActionCreators(
        {
            emailLogin
        },
        dispatch
    );

// An alternative
// const dispatchProps = {
//     setContent: setContentAsync,
//   };

type DefaultComponentProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & DefaultComponentOwnProps;

const DefaultComponent: React.FC<DefaultComponentProps> = (props) => {
    useEffect(() => {
        props.emailLogin('nikola@milev.com', 'ultraSecret');
    }, []);
    return (
        <div className='DefaultComponent'>
            <header className='DefaultComponent-header'>
                <p>A template React app!</p>
                <p>{new String(props.currentToken)}</p>
            </header>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultComponent);

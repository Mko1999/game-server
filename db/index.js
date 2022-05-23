import pkg from 'mongoose';
const { connect } = pkg;

const connectToDB = async () => {
    console.log(process.env.DB_HOST,"HOST")
    try{
        connect(
            // eslint-disable-next-line no-undef
            `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
          );
    }
    catch(e){
        console.log(e)
    }
}

export default connectToDB

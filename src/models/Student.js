const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        validate: [validateEmail], 'Por favor preencher com e-mail válido'

    }
})

module.exports = mongose.model('Student', Student)
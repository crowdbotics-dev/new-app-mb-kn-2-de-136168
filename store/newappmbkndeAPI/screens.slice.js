import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_screen_list = createAsyncThunk(
  "screens/api_v1_screen_list",
  async payload => {
    const response = await apiService.api_v1_screen_list(payload)
    return response.data
  }
)
export const api_v1_screen_create = createAsyncThunk(
  "screens/api_v1_screen_create",
  async payload => {
    const response = await apiService.api_v1_screen_create(payload)
    return response.data
  }
)
export const api_v1_screen_retrieve = createAsyncThunk(
  "screens/api_v1_screen_retrieve",
  async payload => {
    const response = await apiService.api_v1_screen_retrieve(payload)
    return response.data
  }
)
export const api_v1_screen_update = createAsyncThunk(
  "screens/api_v1_screen_update",
  async payload => {
    const response = await apiService.api_v1_screen_update(payload)
    return response.data
  }
)
export const api_v1_screen_partial_update = createAsyncThunk(
  "screens/api_v1_screen_partial_update",
  async payload => {
    const response = await apiService.api_v1_screen_partial_update(payload)
    return response.data
  }
)
export const api_v1_screen_destroy = createAsyncThunk(
  "screens/api_v1_screen_destroy",
  async payload => {
    const response = await apiService.api_v1_screen_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const screensSlice = createSlice({
  name: "screens",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_screen_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_screen_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_screen_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_screen_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_screen_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_screen_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_screen_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_screen_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_screen_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_screen_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_screen_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_screen_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_screen_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_screen_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_screen_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_screen_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_screen_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_screen_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_screen_list,
  api_v1_screen_create,
  api_v1_screen_retrieve,
  api_v1_screen_update,
  api_v1_screen_partial_update,
  api_v1_screen_destroy,
  slice: screensSlice
}

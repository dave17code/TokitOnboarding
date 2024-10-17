import { useMutation, useQuery } from '@tanstack/react-query'

import { AxiosError } from 'axios'

import instance from '@/cofigs/axios/instance'

import {
  MutationHookParams,
  Parameter,
  QueryHookParams,
  RequestFnReturn,
} from '../@types/react-query-type'
import { UserApi } from './User.api'

/**
 * !DO NOT EDIT THIS FILE
 *
 * 스크립트가 실행될때, 파일을 항상 새로 쓰기 때문에 파일 수정시 작성내용이 제거 될 수 있습니다.
 */

/**
 * tok-cli.config.ts 에서 설정된 instance 경로의 axios instace 가 적용된, api 의 instance 입니다.
 */
export const userApi = new UserApi({ instance: instance })

/**
 * query key 에 undfined 를 포함시키지 않기 위한 함수입니다.
 */
const isDefined = (v: unknown) => typeof v !== 'undefined'

/**
 * query-keys
 */
export const QUERY_KEY_USER_API = {
  CONTROLLER_CREATE_GALLERY_ITEMS: () => [
    'USER_CONTROLLER_CREATE_GALLERY_ITEMS',
  ],
  CONTROLLER_GET_GALLERY_ITEMS: (
    variables?: Parameter<typeof userApi.userControllerGetGalleryItems>,
  ) => ['USER_CONTROLLER_GET_GALLERY_ITEMS', variables].filter(isDefined),
}

/**
 * No description
 *
 * @tags user
 * @name UserControllerCreateGalleryItems
 * @request POST:/user/me/gallery
 * @secure */

export const useUserControllerCreateGalleryItemsMutation = (
  params: MutationHookParams<
    typeof userApi.userControllerCreateGalleryItems,
    AxiosError<any>
  >,
) => {
  const mutationKey = QUERY_KEY_USER_API.CONTROLLER_CREATE_GALLERY_ITEMS()
  return useMutation({
    mutationKey,
    mutationFn: userApi.userControllerCreateGalleryItems,
    ...params?.options,
  })
}

/**
 * No description
 *
 * @tags user
 * @name UserControllerGetGalleryItems
 * @request GET:/user/{id}/gallery */

export const useUserControllerGetGalleryItemsQuery = <
  TData = RequestFnReturn<typeof userApi.userControllerGetGalleryItems>,
>(
  params: QueryHookParams<
    typeof userApi.userControllerGetGalleryItems,
    AxiosError<any>,
    TData
  >,
) => {
  const queryKey = QUERY_KEY_USER_API.CONTROLLER_GET_GALLERY_ITEMS(
    params.variables,
  )
  return useQuery({
    queryKey,
    queryFn: () => userApi.userControllerGetGalleryItems(params.variables),
    ...params?.options,
  })
}